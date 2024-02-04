//문자열이 팰린드롬인지 확인하는 함수

function isPalindrome(str) {
    //문자열 정제 ex) 알파벳과 숫자만 남기는 경우
    /*자바스크립트는 RexEx 정규식을 사용해서 불필요한 문자를 제거할 수 있습니다
    정규식은 /[정규식으로 제거할 패턴]/gim 방식으로 선언합니다
    gim (replaceAll) : 전역적으로 문자열에 포함된 같은 패턴의 문자를 모두 제거하기 위해서 사용합니다 -> /g로
    */
    const resultStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log("echo check : resultStr = ", resultStr);

    
    //문자열 뒤집기
    const reversedStr = resultStr.split().reverse().join();
    
    return resultStr === reversedStr;
}

const exampleStr = "A man, a plan, a canal, Panama";
const exampleStr2 = "race a car";

isPalindrome(exampleStr);
isPalindrome(exampleStr2);