//게임 하다가 화나서 만드는
//1~100까지의 랜덤수를 이용한 15퍼센트 성공확률 시뮬레이션

//확률보정 추가 실패시 1퍼센트씩 추가

let success = 15;

while(true){
    let randInt = Math.floor(Math.random()*100+1);

    if (randInt <= success){
        console.log("강화에 성공하였습니다.");
        console.log(`숫자는 ${randInt} 입니다.`);
        break;
    }else{
        console.log("강화에 실패하였습니다.");
        alert("실패! 다시 시도하겠습니까?");
        success++;
        randInt = Math.floor(Math.random()*100+1);
    }
}