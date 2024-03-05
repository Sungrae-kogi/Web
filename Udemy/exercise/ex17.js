//프로그래머스 특정문자열로 끝나는 가장 긴 부분문자열
function solution(myString, pat) {
    var answer = '';
    
    answer = myString.slice(0,myString.lastIndexOf(pat)) + pat;
    
    return answer;
}


//RegExp 객체를 사용한 풀이, 직접 풀었던 방법은 lastIndexOf 함수를사용하여 풀었으나 함수도 생소하고 만족스럽지않음.
//문제가 lastIndexOf만을 생각하고 만들어졌다는 느낌?? RegExp를 모르면 다른 문제가나왔을때 풀지 못할거 같은 찝찝함때문.
function solution(myString, pat) {
    // pat으로 주어진 패턴이 나타나기 전까지 어떤 문자열이든지 포함하는 정규 표현식.
    const reg = new RegExp(`[A-z]*${pat}`, "g");
    return myString.match(reg)? myString.match(reg)[0]: null;
}