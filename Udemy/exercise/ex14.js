//프로그래머스 세로 읽기
function solution(my_string, m, c) {
    var answer = '';
    let arr = [];
    let idx = 0;
    let ms_length = my_string.length;
    while(idx < ms_length){
        arr.push(my_string.slice(0,m));
        my_string = my_string.slice(m);
        idx += m;
    }
    for(let i of arr){
        answer += i[c-1];
    }
    return answer;
}

//풀이는 문제없었으나 너무 막무가내로 조잡하게 끼워맞춰 풀어낸 느낌이라 다른풀이를 찾아볼 수 밖에 없었다.
function solution(my_string, m, c) {
    return [...my_string].filter((_, i) => i % m === c - 1).join('');
}

//filter 메소드로 간단하게 처리가 가능한거를 m 간격마다 잘라 배열에 넣어 그 배열을 또 순회하면서 c-1번째 인덱스값을 
//하나씩 answer에 추가하는 작업을 했다.
//filter((_, i) => i%m === c-1).join('');  -> i는 배열에서 순회하듯 진행되는 요소의 인덱스값