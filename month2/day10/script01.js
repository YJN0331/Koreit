// 객체 리터럴 : 객체를 만드는 문법

// 객체 리터럴을 사용하면 이름과 값을 직접 정의할 수 있다.

//new Date(); // Date라는 객체를 생성한다. new=생성자

//const a = new Date();

/*
function Cat() {
}
*/  //내가 만든 생성자

//위 두 방법의 공통점 
// 객체 : 데이터와 기능을 가진다 (== 변수와 함수를)
// 객체 : 사물 또는 개념을 나타낸 데이터
// ex 할일목록 {할일 : "밥먹기", 실행여부:true}
// 객체 리터럴은 중괄호를 사용한다 {}
// {}가 객체 하나가 됨.
/*
예시
const cat = {
}

*/
// cat이 myName이라는 속성을 가졌으면 좋겠다, myName의 값은 : ""로 써주면 됨
 /* const cat = {
   myName : "국희",
   myColor : "회색",
   myAction : function() {
     console.log("우다다 달립니다.")
   }

 }

 console.log(cat.myName);
 console.log(cat["myColor"]);
 cat.myAction();
*/
/*
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", function() {
  console.log(input.value);
  const todoItem = document.createElement("li");
  todoItem.textContent = input.value;
  input.value = "";
  ul.appendChild(todoItem);

})
*/


const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", function() {
  const todoItem = document.createElement("li");
  
  const todo = {
    todoText : input.value,
    priority : Math.floor(Math.random() * 3) + 1
  }

  todoItem.textContent = `할일 : ${todo.todoText}, 우선순위 : ${todo.priority}`;
  input.value = "";
  ul.appendChild(todoItem);

})