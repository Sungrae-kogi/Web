//Map 객체 기존 객체와는 다르게 메소드만을 이용하여 값을 조절
//programmers 달리기경주문제

//indexOf로 players 배열을 순회하면서, callings 배열을 순회 따라서 O(n^2)라 시간초과소요
function solution(players, callings) {
    for (let calling of callings) {
        const idx = players.indexOf(calling);
        [players[idx], players[idx - 1]] = [players[idx - 1], players[idx]];

    }

    return players;
}

//set 메소드로 값 삽입, get 메소드로 값 조회, delete로 삭제(key 값전달)
//Map 객체는 객체프로퍼티를 자주 변경할 때 유효, 
function solution(players, callings) {
    const hash = new Map();

    players.forEach((name, idx) => {
        hash.set(name, idx);
    })

    callings.forEach(name => {
        const currIdx = hash.get(name);
        const front = players[currIdx - 1];

        [players[currIdx], players[currIdx - 1]] = [players[currIdx - 1], players[currIdx]];

        //추월했으니 idx-1
        hash.set(name, hash.get(name) - 1);
        hash.set(front, hash.get(name) + 1);
    })


    return players;
}