function logName() {
    //fetchUser는 서버에서 데이터를 받아오는 HTTP 통신 코드라고 가정
    let user = fetchUser('domain.com/users/1');
    if (user.id === 1) {
        console.log(user.name);
    }
}

//일반적으로 자바스크립트의 비동기 처리 코드는 아래같이 콜백을 사용해야 코드의 실행 순서를 보장
function logName() {
    let user = fetchUser('domain.com/users/1', function (user) {
        if (user.id === 1) {
            console.log(user.name);
        }
    });
}


// -> async, await 코드로
//일반적인 코드의 흐름대로 생각하기 편하게
//서버에서 사용자 데이터를 불러와서 변수에 담고, 사용자 아이디가 1이면 사용자 이름을 출력한다
//async await만 붙이면 된다.
async function logName() {
    let user = await fetchUser('domain.com/users/1');
    if (user.id === 1) {
        console.log(user.name);
    }
}


//여러 개의 비동기 처리 코드를 다룰 때 중요성이 부각 
//아래 함수들을 실행하면 각각 사용자 정보와 할일정보가 담긴 '프로미스 객체' 가 반환.
function fetchUser() {
    var url = 'https://jsonplaceholder.typicode.com/users/1'
    return fetch(url).then(function (response) {
        return response.json();
    });
}

function fetchTodo() {
    var url = 'https://jsonplaceholder.typicode.com/todos/1';
    return fetch(url).then(function (response) {
        return response.json();
    });
}

//async & await result
async function logTodoTitle(){
    let user = await fetchUser();
    if (user.id === 1){
        let todo = await fetchTodo();
        console.log(todo.title);
    }
}