//프로그래머스 수열과 구간 쿼리 1
function solution(arr, queries) {
    var answer = [];
    
    for(let i=0; i<queries.length; i++){
        const [s, e] = queries[i];
        for(let j=s; j<=e; j++){
            arr[j] +=1;
        }
    }
    return arr;
}


//forEach를 사용한 코드
function solution(arr, queries) {
    queries.forEach(([s, e]) => {
        while (s <= e) arr[s++]++;
    });
    return arr;
}
