const express = require('express');
const app = express();

//비동기 함수 예
app.get('/', async (req, res, next) => {
    try {
        throw new Error('Error in Async Function');
    } catch (err) {
        //라우터 내에서 에러발생시 next()함수를 이용하여 다음 미들웨어로 전달하여 에러 처리.
        console.error(err.stack);
        next(err);
    }
});

//오류 처리 미들웨어
app.use((err, req, res, next) => {
    //console.error(err.stack);
    res.status(500).send('Server Error!');
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server on http://localhost:${port}.`);
});