
/* 
1. id가 "todo-list"인 할 일이 li로 추가되는 목록
2. li로 된 할 일을 선택하면 회색으로 바뀜 
3. li로 된 할 일의 x를 누르면 li가 삭제 됨
4. id가 "todo-form"인 form에서 할 일을 입력, 제출
5. 할 일은 local storage에 저장 됨.
6. todoList는 ul을 선택
7. todoForm은 할 일 입력 form을 선택
8. todoArr는 할 일을 보관하는 배열
9. displayTodos 함수
10. handleTodoDelBtnClick 함수는 주어진 id를 가진 할 일만 todoArr에서 제외


*/

const todoList = document.getElementById("todo-list")
const todoForm = document.getElementById("todo-form")
let todoArr = []

// displayTodos() // 할 일 목록을 보여줌
function displayTodos() {
    todoList.innerHTML = ""
    todoArr.forEach(todo => {
        const todoItem = document.createElement("li")
        todoLi.innerHTML = todo
        todoList.appendChild(todoLi)
        const todoDelBtn = document.createElement("span")
        todoDelBtn.innerHTML = "x"
        todoDelBtn.title = "클릭 시 삭제"

    })
}

// 할 일 입력 후 제출하면 발생하는 이벤트 다루기
todoForm.addEventListener("submit", function(e) {
  e.preventDefault() // 원래 있는 기능은 사용 안한다.
  // 새로 추가 될 할 일 객체
  // todoId : 이 객체만이 가지고 있는 고유한 값(식별자)
  // todoText : 입력한 할 일
  const toBeAdded = {
    todoText: todoForm.todo.value, // input에서 읽어 들인다.
    todoId: new Date().getTime(),
    todoDone: false // 끝났는지 확인하는 boolean
  }
  todoForm.todo.value = "" // 입력한 값을 초기화
  todoArr.push(toBeAdded) // 새로 추가된 할 일을 todoArr에 추가
  displayTodos() // 할 일 목록을 보여줌
  saveTodos()
})  
loadTodos() // 시작 할 때 한 번만
