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

/*비동기 유틸리티 함수 사용예시
비동기 Callback을 감싸는 함수를 만들어서 다음 오류가 나올때마다 반복해서 try catch문을 쓰지 않아도 되게 하는것.
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e));
    }
}

app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError('Product not found!', 404);
    }
    res.render('products/show', { product });
}))
*/

//오류 처리 미들웨어
app.use((err, req, res, next) => {
    //console.error(err.stack);
    //오류 상황에 맞는 상태코드를 사용하는데 능숙해야함.
    const { status = 401, message = 'Something went wrong' } = err;

    //일반적인 Error에는 상태코드 status가 없지만, 생성한 AppError 클래스에는 상태코드 status가 있다.
    res.status(status).send(message);

});


const port = 3000;
app.listen(port, () => {
    console.log(`Server on http://localhost:${port}.`);
});