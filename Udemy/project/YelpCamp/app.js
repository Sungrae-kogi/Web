const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const flash = require('connect-flash');
const Joi = require('joi');
const session = require('express-session');
const ExpressError = require('./utils/ExpressError');

const campgrounds = require('./routes/campgrounds.js');
const reviews = require('./routes/reviews.js');


mongoose.connect('mongodb://127.0.0.1:27017/YelpCamp', { useNewUrlParser: true, useUnifiedTopology: true });

// .then(() => {
//         console.log("MONGO CONNECTION OPEN!!");
//     })
//     .catch(err => {
//         console.log("OH NO MONGO CONNECTION ERROR!");
//         console.log(err);
//     })


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));  //express가 public 디렉토리를 다룰 수 있도록

const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        //httpOnly: true,  이제는 default로 true로 설정되어있다.
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,   //Date.now()는 밀리초를기준으로 나오므로 7일을 만료날로 잡는다면 밀리초단위로 변환을해야한다.
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig));
app.use(flash());   //상대적으로 중요도가 떨어지는 미들웨어라고한다, React를 사용함으로서 대체가 가능하다고도 함.


//모든 요청에 미들웨어를 설정 라우트 핸들러보다 앞에 설정했다.
app.use((req,res,next) => {
    res.locals.success = req.flash('success');  //'키'가 success인 flash를 불러오고 로컬변수에 접근도 가능
    res.locals.error = req.flash('error');
    next();
})

// /campgrounds를 campgrounds라우트로 사용 -> 라우트는 /campgrounds로 시작
app.use('/campgrounds', campgrounds);
app.use('/campgrounds/:id/reviews', reviews);



//res.render("ejs파일경로", {데이터이름표: 전송할 데이터})
app.get('/', (req, res) => {
    res.render('home');
});


app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));

});

app.use((err, req, res, next) => {
    //비동기함수 내에서 발생한 에러를 전달받는다.
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something went wrong';
    res.status(statusCode).render('error', { err });
});

app.listen(3000, () => {
    console.log('Serving on Port 3000');
});

