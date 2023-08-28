const express = require('express'); // Express 실행
const app = express(); // app 변수에 할당
const path = require('path');


app.set('port', process.env.PORT || 3000);
// app.set('port', 포트) 로 서버가 실행될 포트 설정. 
//process.env 객체에 PORT 속성이 존재 한다면 그 값을 사용하거나, 아니라면 3000번 포트를 할당. 
// app.set(키, 값)을 사용해서 데이터를 저장할 수 있고. 나중에 app.get(키)를 사용해서 그 데이터를 가져올 수 있음.

//app.get('주소', '라우터') 형식 -> 어떤 '주소' 에 대한 GET 요청이 들어왔을 때 콜백함수를 실행
//매개변수 req는 요청에 대한 정보, res는 응답에 대한 정보가 들어 있다.
app.get('/', (req, res) => {
    res.send("Hello Express");
})

//__dirname 현재의 파일이 위치한 폴더의 절대경로
// __dirname : User/ano/temp/direcotory 
// 상대경로와 절대경로를 인자로 전달한 경우 이를 반영한 결과를 리턴함
// 두 단계 올라간 User/ano 에서 /workspace 폴더로 내려가 다시 /ano 폴더를 찾음
//path.join(__dirname, '..', '..','workspace', '.', '/ano');
// Returns: User/ano/workspace/ano

app.get('/home', (req, res) => {
    console.log("This is home");
    res.sendFile(path.join(__dirname, 'index.html')); // 현재 파일이 위치한 폴더의 절대경로에서 index.html파일을 찾음
})

// 쿼리문자열 매개변수에 대한 속성이 포함된 객체
app.get('/search', (req, res) => {
    const { name } = req.query;
    if(!name){
        res.send("Nothing found if nothing searched");
    }
    res.send(`<h1>Search results for: ${name}</h1>`);
})

// 라우터 매개변수 /: 활용 예제
app.get('/:id/:pwd', (req,res) =>{
    //도메인 다음 param이 id와 pwd에 담기게 된다.
    //ex) localhost:3000/cho/1234 -> id=cho pwd=1234
    console.log(req.params.id);
    console.log(req.params.pwd);
    
    res.send(req.params);
})

app.get('*', (req, res) => {
    console.log("You're in err position");
    res.send("I don't know that path");
})

app.listen(app.get('port'), () => {
    console.log("LISTENING ON PORT ", app.get('port'));
})