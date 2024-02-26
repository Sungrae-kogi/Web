//프로그래머스 문자열 정수의 합

//배열 처리과정에서 배우는 함수가 많았다.
function solution(num_str) {
    //map(Number)함수로 ['1','2','3','4'] 같은 문자열정수로 구성된 배열을 [1,2,3,4]로 변환이 가능
    var arr = [...num_str].map(Number);
    let sum=0;
    //forEach함수에 익숙하지 않아 배열합을 forEach로 연습
    arr.forEach(num => {
        sum+=num;
    });
    return sum;
}