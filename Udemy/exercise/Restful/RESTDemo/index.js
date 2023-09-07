const express = require('express');
const app = express();
const path = require('path');

// ★ express.urlencoded() ??? 
/*express 서버로 POST 요청시 input태그의 value를 전달하기 위해 사용
요청의 본문에 있는 데이터를 해석해서 req.body 객체로 만들어주는 미들웨어
요청의 본문에 있는 데이터가 URL-encoded 형식의 문자열로 넘어오기 때문에 객체로의 변환이 필요합니다.
cf) JSON 문자열로 넘어오는 경우 express.json() 미들웨어를 사용합니다.*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

//모든 댓글 렌더링
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

//코멘트 작성 폼
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

//코멘트 배열 추가
app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({username, comment});
    //redirect 하는 이유        https://kirkim.github.io/javascript/2021/09/21/redirect.html
    //redirect를 하면 해당 url로 GET 요청을 자동으로 해줍니다.
    res.redirect('/comments');
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    console.log({ meat, qty });
    res.send(`OK here are your ${qty} ${meat}`);
})

app.listen(3000, () => {
    console.log("ON PORT 3000");
})

