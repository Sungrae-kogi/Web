const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS");
    next();
})

//특정 경로 암호화하기
const verifyPassword = (req, res, next) => {
    const {password} = req.query;
    if(password === 'chickennugget'){
        return next();      //return 을 안넣으면 하나의 응답을 보낸 후 또 다른 응답을 보내려고 할때 생기는 오류가 발생
    }
    res.send('Sorry you need a password');
}

// app.use((req, res, next) => {
//     console.log("THIS IS MY MIDDLEWARE");
//     return next();
// })

// app.use((req, res, next) => {
//     console.log("THIS IS MY SECOND MIDDLEWARE");
//     return next();
// })

app.get('/', (req, res) => {
    res.send('HOME PAGE!');
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS : I LOVE CATS MORE THAN DOGS');
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!');
})



//맨 마지막에 배치되어 미들웨어의 연쇄를 종료, 아무것도 존재하지 않는 경로에 요청을 보내 매칭되지 않으면 
//해당 라우트는 모든것에 매칭되게 설정했으니 예외처리와 같이 실행될것 ex) 404페이지
app.use((req, res) => {
    //res.status(404).send("NOT FOUND!");
    res.send("NOT FOUND!");
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000');
})