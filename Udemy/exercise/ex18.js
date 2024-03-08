//프로그래머스 주사위게임3
function solution(a, b, c, d) {
    if (a === b && a === c && a === d) return 1111 * a

    if (a === b && a === c) return (10 * a + d) ** 2
    if (a === b && a === d) return (10 * a + c) ** 2
    if (a === c && a === d) return (10 * a + b) ** 2
    if (b === c && b === d) return (10 * b + a) ** 2

    if (a === b && c === d) return (a + c) * Math.abs(a - c)
    if (a === c && b === d) return (a + b) * Math.abs(a - b)
    if (a === d && b === c) return (a + b) * Math.abs(a - b)

    if (a === b) return c * d
    if (a === c) return b * d
    if (a === d) return b * c
    if (b === c) return a * d
    if (b === d) return a * c
    if (c === d) return a * b

    return Math.min(a, b, c, d)
}
//경우의 수 분할이 가능한 수준이어서 다른답을 참고하여 나열해보았으나 분할이 불가능한 경우를 생각한 코드를 참고해보았다.
function solution(a, b, c, d) {
    const dice = [a, b, c, d];
    const counter = new Array(7).fill(0);
    for (let i = 0; i < 4; i++) 
        counter[dice[i]]++;

    let result = 0;

    //counter 배열에 정수 4가 존재한다는것은 4번 모두 같은 수가 나온 case
    if (counter.includes(4)) { 
        result = 1111 * counter.indexOf(4);
    } else if (counter.includes(3)) {
        const p = counter.indexOf(3);
        const q = counter.indexOf(1);
        result = (10 * p + q) ** 2;
        //배열 counter에서 숫자 2가 정확히 2번포함되어 있는지를 확인 -> 4개중 2개 2개 이렇게 서로 같은숫자인경우
    } else if (counter.includes(2) && counter.filter(val => val === 2).length === 2) {
        const p = counter.indexOf(2);
        const q = counter.lastIndexOf(2);
        result = (p + q) * Math.abs(p - q);
    } else if (counter.includes(2)) {
        const p = counter.indexOf(2);
        //숫자 2가 있는데, p와 다른 두 숫자를 각각 얻어냈다.
        const q = dice.filter(num => num !== p)[0];
        const r = dice.filter(num => num !== p)[1];
        result = q * r;
    } else { 
        result = Math.min(...dice);
    }

    return result;
}