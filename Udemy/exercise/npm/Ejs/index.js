const express = require("express");
const app = express();
const path = require("path");


//EJS 사용 알림
//디렉토리 설정
//https://velog.io/@untiring_dev/Express-EJS-views-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EC%84%A4%EC%A0%95
app.set('view engine', 'ejs');
//현재 실행중인 파일(index.js)이 있는 현재 디렉토리(__dirname)와 home.ejs에 도달하기 위한 나머지 경로인 /views를 붙여줌
app.set('views', path.join(__dirname, '/views'));


//simple route
app.get('/', (req, res) => {
    const pageNum = "two".toUpperCase();
    res.render("home", { pageNum: pageNum });
})

app.get('/cats', (req,res) =>{
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', {cats});
})

//정적 assets의 절대경로 지정
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/r/:subreddit', (req,res) => {
    const {subreddit} = req.params;
    res.render('subreddit', {subreddit});
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    //템플릿 렌더링에 전달할때 key-value 쌍 객체로 전달
    res.render('random', { rand: num });
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})