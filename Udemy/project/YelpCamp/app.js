const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const Joi = require('joi');
const { campgroundSchema, reviewSchema } = require('./schemas.js');
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


//validation Schema
const validateCampground = (req, res, next) => {

    //result 는 콘솔출력시켜보면 error,value field로 되어있다.
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        //비동기 함수 내에 있으니 오류가 발생한다면 에러처리 handler로 갈것.
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}



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

