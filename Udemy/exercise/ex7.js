//프로그래머스 홀짝에 따라 다른 값 반환하기

function solution(n) {
    var answer = 0;
    //홀수
    if(n%2===1){
        while(n>=1){
            answer = answer +n;
            n=n-2;
        }
    }else if(n%2===0){
        while(n>0){
            answer = answer + n**2;
            n=n-2;
        }
    }
    return answer;
}
//만족스럽지 않아 다른답을 찾아봄
//Array()메서드와 map에 대해 다시한번 알게되었음.
function solution(n) {
    const array = Array(n).fill().map((x,idx)=> idx+1);
    return n%2 === 0 ? array.reduce((a,b) => b%2===0 ? a+Math.pow(b,2) : a, 0) : array.reduce((a,b) => b%2===0 ? a : a+b, 0);
}