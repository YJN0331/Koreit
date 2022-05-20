/*
 함수 호출문은 함수명 + 소괄호
 소괄호 안의 내용은 함수가 실행 될 때 사용할 재료가 들어감
 재료란 데이터을 뜻하고, 매개변수라고 부른다
 즉 func(매개변수) 이런식으로 함수를 호출하면 된다.

function Vegetable(vegetable) {
  console.log("함수에 전달 된 채소는?")
  console.log(vegetable)
}

Vegetable("양파");
→ 매개변수는 양파
*/

// 값을 반환하는 함수를 만들자
function getAddress() {
  console.log("주소를 줄게요")
  return "대전시 대덕구"

}

console.log(getAddress());

// 매개변수parameter : 인자를 임시 보관할 변수 ig1,ig2
// 인자(재료)를 받는 함수를 만들자 
function cooking(ig1, ig2) {
  console.log("맛있는 찌개를 끓이자");
  //매개변수를 추가
  console.log(`${ig1}와 ${ig2}를 넣어서 끓이자`);
  

}


cooking("김치", "양파");

function kkk(g1,g2,g3,g4) {
  console.log("배열이 적용이 될까?")
  console.log(g1)
  console.log(g2)
  console.log(g3)
  console.log(g4)
} // 오류임 for문 사용해야 됨

asd = [1,2,3,4,5,6]
kkk(asd)


