//상위 요소의 div 노드만 접근
const divNode = document.getElementById("div-content");

//div 노드에만 이벤트 리스너를 설정
divNode.addEventListener("click", function (e) {
    const id = e.target.id;
    
    //이벤트 객체의 target.id로 조건문을 설정
    if (id === "div-content") {
        console.log("div-content id Clicked");
    } else if (id === "span-content"){
        console.log("span-content id Clicked");
    }else if (id === "btn"){
        console.log("btn is Clicked");
    }
});