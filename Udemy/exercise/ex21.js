//프로그래머스 조건에 맞게 수열 변환하기2
function solution(arr) {
    var answer = 0;
    let count = 0;
    while(true){
        let before_arr = arr.slice();
        for(let i=0; i<arr.length; i++){
            if(arr[i] >= 50 && arr[i] % 2 === 0){
                arr[i] = arr[i] / 2;
            }
            else if(arr[i] < 50 && arr[i] % 2 === 1){
                arr[i] = arr[i] * 2 + 1;
            }
        }
        if(before_arr.every(item => arr.includes(item))){
            return count;
        }
        count++;
    }
    return answer;
}

//한번에 정답을 맞췄지만, 반신반의하게 몇몇 테스트케이스나 맞고 방향성은 대충 맞게했다 싶은 마음으로 제출한거라 다른 정답들과 코드들을 리뷰
//if(before_arr.every(item => arr.includes(item))) 이 코드는 두 배열비교상황에서 적절한 방법을 구글링으로 찾은것으로 더 학습이필요.
function solution(arr) {
    let prev = [...arr]
    let flag = 0
    let ans = 0
    while (true){
        flag = 0
        for (let i=0; i<arr.length; i++){
            if (arr[i] < 50 && arr[i] % 2) arr[i] = arr[i] * 2 + 1
            else if (arr[i] >= 50 && arr[i] % 2 === 0) arr[i] = arr[i] / 2
            else flag++
        }
        if (flag === arr.length) break
        prev = [...arr]
        ans++
    }
    return ans

}
//이전 배열을 얻어내는 과정에서 shallow copy에 대한 내용이 생각나서 arr.slice()라는 방법으로 deep copy를 진행했지만,
//이 다른 코드에서는 [...arr]란 방법으로 deep copy를 진행했다는점에 더 깔끔하고 좋은코드란 느낌을받았다.
//나머지는 이전 배열 변수를 둔다던지, while문을 쓴다던지 내가 작성했던 방법이 옳았구나 라는 느낌을 받았다.