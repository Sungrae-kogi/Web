/*콜백 함수는 다른 함수에 매개변수로 넘겨준 함수를 말한다. 
함수를 명시적으로 호출하는 방식이 아니라 특정 이벤트가 발생했을 때 시스템에 의해 호출된다. */

//콜백지옥 (Callback Hell)
//JavaScript를 이용한 비동기 프로그래밍시 발생하는 문제로, 함수의 매개변수로 넘겨지는 콜백 함수가
//반복되어 코드의 들여쓰기 수준이 깊어지는 현상.

//아래와 같은 코드의 가독성문제와 불편함으로 인해 Promise가 나옴


//ex) 사용자 데이터를 서버에서 받아오는 클래스
class UserStorage {
    loginUser(id, password, onSuccess, onError) {   //success와 onError 둘중에 하나만 실행
        setTimeout(() => {
            if (
                (id === 'seul' && password === '123') ||
                (id === 'kim' && password === '456')

            ) {
                onSuccess(id);
            } else {
                onError(new Error('error'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'seul') {
                onSuccess({ name: 'seul', role: 'admin' });
            } else {
                onError(new Error('error'));
            }
        }, 1000);
    }
};

const userStorage = new UserStorage();
const id = prompt('아이디를 입력해 주세요!');
const password = prompt('비밀번호를 입력해 주세요!!');

/*
1) userStorage에서 로그인을 한다.
2) 로그인이 성공하면 user가 전달되므로 전달된 user를 이용해서 getRoles,를 호출한다.
3) getRoles 까지 성공적으로 수행 된다면 최종적으로 받아온 user를 이용해서 alert창을 나타낸다.
*/

userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            error => {
                console.log('에러2');
            }
        );
    },
    error => { console.log('에러1') }
);


//another Ex
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500; //500~5000
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(');
        } else {
            success(`Here is your fake data form ${url}`);
        }
    }, delay);
}

fakeRequestCallback('book.com', function (response) {
    console.log('Success!');
    console.log('response');

    //첫 번째 요청이 끝난 다음에 두번째 요청을 보내도록 만들기 위해서는 성공콜백인 여기에다가 두번째 요청을끼워넣어야한다.
    fakeRequestCallback('book.com/page2',
        function (response) {
            console.log('It worked Again!');
            console.log(response);
            fakeRequestCallback('book.com/page3',
                function(response){
                    console.log('It worked Again (3rd)')
                    console.log(response);
                },
                function(error){
                    console.log('Error (3rd) request',error);
                })
        },
        function (error) {
            console.log('Error (2nd req)!!', error);
        });

}, function (error) {
    console.log('Error!');
    console.log('error');
});