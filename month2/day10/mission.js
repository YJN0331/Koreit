const button = document.getElementById("button");
const ul = document.getElementById("ul");
const input = document.getElementById("input");


// 조회 버튼 클릭 시 - 저장 된 데이터 중 아무거나 하나만 읽어서 콘솔에 출력하기

window.onload = function(){}


button.addEventListener("click", function () {
  const item = localStorage.getItem("국희");
  console.log(item)

}
);

// 삭제 버튼 클릭 시 - 저장 된 데이터 전부 지우기
button.addEventListener("click", function() {
    localStorage.clear();
}
);
