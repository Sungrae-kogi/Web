//프로그래머스 뒤에서 5등까지
//Javascript에서 sort함수의 작동방식이 특이하여 학습이필요
function solution(num_list) {
    var answer = num_list.sort(function(a,b){
        return a-b;
    });
    
    return answer.slice(0,5);
    
}

// //JavaScript 배열의 sort 함수는 배열의 요소를 정렬하는 데 사용됩니다. 
// 이 함수는 기본적으로 문자열로 간주하여 정렬하므로 숫자를 올바르게 정렬하려면 정렬 함수를 제공해야 합니다.
// sort 함수의 기본 동작은 배열의 각 요소를 문자열로 변환하고 이를 기반으로 정렬하는 것입니다. 
// 이로 인해 숫자 정렬이 제대로 이루어지지 않을 수 있습니다. 
// 예를 들어, [10, 5, 20, 1]을 정렬하면 1, 10, 20, 5와 같이 정렬됩니다.
// 따라서 숫자를 올바르게 정렬하려면 비교 함수(compare function)를 제공해야 합니다. 
// 비교 함수는 두 요소를 비교하고, 정렬 순서에 따라 음수, 양수, 또는 0을 반환합니다.
// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // 출력: [1, 5, 10, 20]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // 출력: [20, 10, 5, 1]