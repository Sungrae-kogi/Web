//프로그래머스 특별한 이차원 배열2
function solution(arr) {
    var answer = 0;
    for(let i=0; i<arr.length; i++){
        //틀렸던 부분 arr[i].length
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j] !== arr[j][i])
                return 0;
        }
    }
    return 1;
}
//이차원 배열에서 idx 순회할때 j의 범위에서 주의해야함.