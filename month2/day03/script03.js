
// document : 현재 화면에 보이는 문서, 화면
// window : 현재 브라우저의 창 ( 생략 가능 )
// 메소드의 괄호 안에 전달되는 데이터를 인자argument라고 한다.
//document.querySelector(인자(css선택자))
/*document.querySelector(".title")
console.log(document.querySelector(".title"));
let title = document.querySelector(".title");
let paragraph = document.querySelector("p");
console.log(title);
console.log(paragraph);

let idTitle = document.getElementById("title");
let idP1 = document.getElementById("snack");
let idP2 = document.getElementById("issue");
console.log(idTitle);
console.log(idP1);
console.log(idP2);

*/

// textContent 속성은 해당 노드가 포함하고 있는 텍스트 콘텐츠를 표현하는 속성이다.
// textContent를 통해 요소가 포함한 텍스트를 읽을 수도, 변경 할 수도 있다.
// 노드 : 객체 하나를 표현하는 단위명

// const : 대상이 변하지 않을 때 사용하는 *상수* 선언
// 미션 : h1을 선택해서 title이라는 변수로 하나 만들어라
const title = document.querySelector("h1");
// 또는 document.getElementById("title");
// h1 요소를 객체로 선택, h1안에 있는 기능과 데이터들에 해당하는 
// 속성들이 h1요소 안에 들어있는 변수가 됨(ex)textContent, innerHTML)
// 따라서 보는 것만 하는게 아닌, 새로운 내용을 입력하는 것도 가능하다.
// title.textContent = "안녕하세요";
title.textContent = "그린 브라우니"

console.log(title); // title이라는 객체가 가지고 있는 h1 요소  안에 있는 변수
console.log(title.textContent); // 써져 있는 내용만 보이게 하는 것
// title이라는 객체가 가지고 있는 textContent 속성. 즉, 변수

// 객체의 속성 : 객체가 가지고 있는 변수
// 객체의 메소드 : 객체가 가지고 있는 함수
title.textContent = "원하는 식당 이름"
// 미션 : p 태그 두 개를 각각 골라서 내가 쓴 식당에 맞게 나름대로 내용을 고쳐보자
const issue = document.querySelector("#issue")
issue.textContent = "브라우니 맛집"

const nope = document.querySelector("#nope")
nope.textContent = "쯔양은 안 다녀간 집"

console.log(issue);
console.log(nope);