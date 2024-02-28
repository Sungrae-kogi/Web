//프로그래머스 문자열 잘라서 정렬하기
function solution(myString) {
    let ans = myString.split('x').sort().filter(a => a !== '');
    return ans;
    
}
//풀이는 문제없었으나 다른사람의 풀이에서 정규표현식을 이용한 점에 관심이 생겨 정규표현식에 대해 조금 더 알아보았음.
const solution=s=>s.match(/[^x]+/g).sort()

// /[^x]+/는 정규 표현식으로, 문자열에서 x가 아닌 모든 문자열을 찾아내는 패턴을 나타냅니다.

// [^x]: ^는 부정(negation)을 나타내므로, x를 제외한 어떤 문자든지 매치됩니다.
// +: 하나 이상의 반복을 나타냅니다. 따라서 여러 문자가 매치됩니다.
// g: 전역(global) 플래그로, 문자열 내에서 패턴과 일치하는 모든 부분을 찾습니다.

// g가 없이 /[^x]+/만 사용한다면 매칭되는 부분 하나만 찾고 끝내게된다.

const inputString = "axbxcdxxefx";
const result = inputString.match(/[^x]+/);

console.log(result);

//result에는 ['a', 'b', 'cd', 'ef'] 와 같이 각 부분 문자열이 배열 형식으로 반환이된다.