//프로그래머스 l로 만들기
function solution(myString) {
    var answer = '';
    let order = 'l'.charCodeAt();
    for(let i of myString){
        if(i.charCodeAt() < order){
            answer+='l';
        }else{
            answer+=i;    
        }
        
    }
    return answer;
}
//아스키코드 값얻는 charCodeAt()함수를 사용하여 조건문을 돌렸으나 정규표현식을 이용하여 l이전의 알파벳을 구분하는 방법을 이용하면
//더욱 간단하게 가능함.
//g 플래그는 전역플래그로 패턴과 일치하는 모든 부분을 찾도록 하는기능으로 만약 g가 없다면 첫번째로 매칭되는 부분만을 대상으로 작동하고 끝남.
const solution = myString => myString.replace(/[a-k]/g,'l')