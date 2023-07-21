
/*
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('Your fake data here');
            }
            reject('Request Error');
        }, 1000);
    })
}

fakeRequest('/dogs/')
    .then(() => {
        console.log("DONE WITH REQUEST");
        console.log("data is :", data);
    })
    .catch((err) => {
        console.log("OH NO!", err);
    });
*/


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('violet', 1000))



/*Async 함수는 Promise객체를 자동으로 리턴
const sing = async () => {
    throw "OH NO, PROBLEM";
    return "LA LA LA LA";
}

sing()
    .then(data => {
        console.log("PROMISE RESOLVED WITH:", data);
    })
    .catch(err => {
        console.log("OH NO, PROMISE REJECTED!");
    });


const login = async (username, password) {
    if (!username || !password) throw 'Missing credentials'
    if (password === 'corgifeetarecurete') return 'WELCOME'
    throw 'Invalid Password'
}

login('akjsdk', 'aosekfd')
    .then(msg => {
        console.log("LOGGED IN!");
        console.log(msg);
    })
    .catch(err => {
        console.log("ERROR!");
        console.log(err);
    })

*/

/*await 키워드의 역할은 기다리게 하는것으로  Promise가 값을 반환할 때까지
기다리기 위해 비동기 함수의 실행을 일시정지시킨다.
비동기 함수에서만 적용하기 때문에 두 키워드가 한 쌍 */

async function rainbow(){
    //await은 Promise가 해결될 때까지 잠시 일시 정지한다.
    await delayedColorChange('red', 1000);
    console.log("HI");  //첫번째 Promise가 해결된 다음에 출력
    delayedColorChange('orange', 1000);

}