//프로그래머스 문자개수세기
function solution(my_string) {
    var answer = [];
    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    for(let i=0; i<alpha.length; i++){
        let num =[...my_string].filter((alph) => alph === alpha[i]).length;
        answer.push(num);
    }
    
    return answer;
}
//때로는 직접 배열을 채워넣어서 활용해야한다는 것을 다시한번 떠올리게 해준 문제, 

//전체적으로 보면 과정은 비슷하다고생각하지만 훨씬 깔끔하게 다듬은 코드라고 생각된다. new Array()로 배열객체를 만들고 fill()함수로 채우고,
function solution(my_string) {
    let alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var answer = new Array(52).fill(0);
    for (let i = 0; i < my_string.length; i++) {
        answer[alp.indexOf(my_string[i])]++;
    }
    return answer;
}