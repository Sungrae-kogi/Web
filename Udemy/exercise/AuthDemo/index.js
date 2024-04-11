const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');


// MongoDB 연결 주소
mongoose.connect('mongodb://127.0.0.1:27017/loginDemo', {})
    .then(() => console.log('MongoDB connected.'))
    .catch(err => console.error('MongoDB connect error:', err));;

// MongoDB 연결
// mongoose.connect(mongoURI, {

// })
//     .then(() => console.log('MongoDB에 연결되었습니다.'))
//     .catch(err => console.error('MongoDB 연결 오류:', err));


app.set('view engine', 'ejs');
//Express 애플리케이션에서 템플릿엔진이 사용할 뷰 템플릿 파일들이 위치한 디렉토리를 설정하는 코드
//뷰 템플릿들은 서버측에서 렌더링되어 클라이언트로 전송됩니다.
app.set('views', 'views');

//urlencoded 미들웨어는 POST 요청의 본문을 파싱하여 req.body객체에 저장합니다, 이후 POST요청 핸들러에서 req.body를 통해 url-encoded데이터에 접근할 수 있습니다.
app.use(express.urlencoded({ extended: true }));
app.use(session({secret: 'notagoodsecret'}));

//특정 라우트의 경우 사용자 로그인 여부를 확인하는 작업이 필요하므로 해당 미들웨어를 설정
const requireLogin = (req,res,next) => {
    if(!req.session.user_id){
        return res.redirect('/login');
    }
    //로그인상태라면
    next();
}

app.get('/', (req, res) => {
    res.send("THIS IS THE HOME PAGE");
})

app.get('/register', (req, res) => {
    res.render('register');
})

//사용자 등록과정이 쿼리문에 들어가면안되니 post 그리고 사용자 등록과 저장과정이필요하니 async 함수
// 유사 회원가입
app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const salt = await bcrypt.genSalt(10);
    try {
        const hash = await bcrypt.hash(password, salt); // 해시 생성
        const user = new User({
            username,
            password: hash
        })
        await user.save();
        req.session.user_id = user._id;  //회원가입을 했으면 그 세션을 유지하도록
        res.redirect('/');
    } catch (error) {
        console.error('해시 생성 중 오류 발생:', error);
        res.status(500).send('서버 오류 발생');
    }

})

app.get('/login', (req,res) => {
    res.render('login');
})

// 로그인 
app.post('/login', async (req,res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username: username});
    const validPassword = await bcrypt.compare(password, user.password);
    if(validPassword){
        //로그인-> 세션에 사용자 id 지정  (세션을 유지하도록)
        req.session.user_id = user._id;
        res.redirect('/secret');
    }else{
        res.redirect('/login');
    }
})

//로그아웃은 주로 post라우트 get만 아니면된다.
app.post('/logout', (req,res) => {
    //로그아웃 절차는 세션에서 user_id를 제거하는거가 끝 반드시 null로 설정해야한다.
    req.session.user_id = null;

    //req.session.destroy(); 라는 방법도있다, 세션 전체를 파기, 하지만 인증을 위한 최소값은 사용자 id추적을 그만두는것이다.
    
    res.redirect('/login');
})

app.get('/secret', requireLogin, (req, res) => {
    
    res.render('secret');
})

app.get('/topsecret', requireLogin, (req,res) => {
    res.send("TOP SECRET");
})

app.listen(3000, () => {
    console.log("SERVING ON PORT 3000");
})