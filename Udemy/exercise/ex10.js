//프로그래머스 문자열 정수의 합
function solution(n_str) {
    let str_arr = [...n_str];
    let idx =0;
    while(str_arr[idx] === '0'){
        str_arr.shift();
    }
    return str_arr.join('');
}

//정수는 앞자리에 0이 올수없다는걸 이용한 풀이도 있었다.
const solution = (n_str) => String(Number(n_Str)); 