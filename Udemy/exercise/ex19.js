//프로그래머스 문자열 여러번뒤집기
function solution(my_string, queries) {
    var answer = '';
    let arr = [...my_string];
    for(let [a,b] of queries){
        arr = arr.slice(0,a).concat(arr.slice(a,b+1).reverse()).concat(arr.slice(b+1));
    }
    return arr.join('');
}