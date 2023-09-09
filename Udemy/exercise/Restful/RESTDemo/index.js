const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');
uuid(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

// ★ express.urlencoded() ??? 
/*express 서버로 POST 요청시 input태그의 value를 전달하기 위해 사용
요청의 본문에 있는 데이터를 해석해서 req.body 객체로 만들어주는 미들웨어
요청의 본문에 있는 데이터가 URL-encoded 형식의 문자열로 넘어오기 때문에 객체로의 변환이 필요합니다.
cf) JSON 문자열로 넘어오는 경우 express.json() 미들웨어를 사용합니다.*/

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

const comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

//app.METHOD(PATH,HANDLER)  기본형식

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
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    //redirect 하는 이유        https://kirkim.github.io/javascript/2021/09/21/redirect.html
    //redirect를 하면 해당 url로 GET 요청을 자동으로 해줍니다.
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})

app.get('/comments/:id/edit', (req,res) => {
    //id일치하는 코멘트를 찾아서 편집
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment});
})

app.patch('/comments/:id', (req,res) =>{
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id ===id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
})


app.post('/tacos', (req, res) => {
    /*
    클라이언트에서 form으로 보낸 데이터를 node.js에서 불러오기 위해 '요청 객체'를 사용 -> 클라이언트가 보내준 데이터를 가져올때 사용하는 객체
    req.body라고 표현
    */

    const { meat, qty } = req.body;
    console.log({ meat, qty });
    res.send(`OK here are your ${qty} ${meat}`);
})

app.listen(3000, () => {
    console.log("ON PORT 3000");
})

