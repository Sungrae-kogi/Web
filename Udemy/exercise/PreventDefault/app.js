const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");

//폼 추가, 기본 동작 차단, 데이터 추출, 로직 수행, 화면 업데이트
form.addEventListener("submit", function(e){
    e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    list.append(newLI);
    input.value = "";
});