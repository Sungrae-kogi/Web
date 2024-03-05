//프로그래머스 배열 만들기2
function solution(l, r) {
    var answer = [];
    for(let i=l; i<=r; i++){
        if(i%5 !== 0)
            continue;
        const Str = String(i);
        //every 함수를 참조했다. 배열의 모든 요소가 주어진 콜백함수를 만족하는지 여부를 검사하여 bool값을 반환.
        if([...Str].every((element) => element === '0' || element === '5')){
            answer.push(i);
        }
    }
    if(answer.length ===0){
        answer.push(-1);
    }
    return answer;
}

//다른답 오히려 간단했지만 every를 사용해서 풀이한 방법이 every 함수에 대해 학습할 수 있었기에 더 좋았다.
function solution(l, r, arr = []) {
    for(let i = l; i <= r; i++) {
        //정규표현식을 사용해서 0과 5를 전부 공백으로 바꾸면 0과 5로만 이루어진 문자는 공백으로 바뀔것이다에 착안.
        if (i.toString().replaceAll(/[05]/g, '') === '') arr.push(i);
    }
    return arr.length ? arr : [-1];
}