const express = require('express');
const app = express();

const AppError = require('./AppError');

//비동기 함수 예
app.get('/', async (req, res, next) => {
    try {
        //throw new AppError('Error in Async Function', 500);
        chicken.fly();
    } catch (err) {
        //라우터 내에서 에러발생시 next()함수를 이용하여 다음 미들웨어로 전달하여 에러 처리.
        console.error(err.stack);
        next(err);
    }
});

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin!', 403);
})

//오류 처리 미들웨어
app.use((err, req, res, next) => {
    //console.error(err.stack);
    //오류 상황에 맞는 상태코드를 사용하는데 능숙해야함.
    const { status = 401, message = 'Something went wrong' } = err;
    console.log(message);
    console.log(status);
    //일반적인 Error에는 상태코드 status가 없지만, 생성한 AppError 클래스에는 상태코드 status가 있다.
    res.status(status).send(message);

});


const port = 3000;
app.listen(port, () => {
    console.log(`Server on http://localhost:${port}.`);
});