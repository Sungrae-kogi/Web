const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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


app.get('/', (req, res) => {
    res.send("THIS IS THE HOME PAGE");
})

app.get('/register', (req, res) => {
    res.render('register');
})

//사용자 등록과정이 쿼리문에 들어가면안되니 post 그리고 사용자 등록과 저장과정이필요하니 async 함수
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
        res.redirect('/');
    } catch (error) {
        console.error('해시 생성 중 오류 발생:', error);
        res.status(500).send('서버 오류 발생');
    }

})


app.get('/secret', (req, res) => {
    res.send("THIS IS SECRET! YOU CANNOT SEE UNLESS YOU ARE PASSED");
})

app.listen(3000, () => {
    console.log("SERVING ON PORT 3000");
})