const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('thisismysecret'));


app.get('/greet', (req, res) => {
    // // /setname을 방문한 상태라면 name과 animal값이 콘솔에 출력
    // console.log(req.cookies);
    // 앱을 종료하고 다시시작하더라도 이 쿠키들이 모든 요청에 실릴것이다.
    //응용하면 사용자에게 양식을 받거나 이름을 입력하게 해서 쿠키에 저장할 수 있다.
    //쿠키는 브라우저에 파일로 저장되고, 이용자가 언제든 삭제할 수있고 다른브라우저를 사용할 경우 이용불가해지므로 쿠키에는 중요한정보를 담지않는다.
    const { name = 'No-name' } = req.cookies;
    res.send(`Hey there, ${name}`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'stevie chicks');
    res.cookie('animal', 'harlequin shrimp');
    res.send('OK SENT YOU A COOKIE');
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
    res.send('OK SIGEND YOUR FRUIT COOKIE');
})

app.get('/verifyfruit', (req,res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies);
})

app.listen(3000, () => {
    console.log("SERVING");
})