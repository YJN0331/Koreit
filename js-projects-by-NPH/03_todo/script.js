


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
  audio.play();
  displayTodos() // 할 일 목록을 보여줌
  saveTodos()
})  
loadTodos() // 시작 할 때 한 번만
