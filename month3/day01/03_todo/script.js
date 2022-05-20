// 요소 선택 및 배열 선언
const todoList = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
let todoArray = []; // 할 일을 채울 빈 배열



// displayTodos 함수
function displayTodos() {
  todoList.innerHTML = ''; // todoList 요소의 innerHTML 속성을 비움
  todoArr.forEach(function(aTodo) {
    const todoItem = document.createElement('li'); // 말풍선
    const todoDelBtn = document.createElement('span'); // 말풍선 옆에 x
    todoDelBtn.innerText = 'X'; // x 요소의 innerText 속성을 X로 설정
    todoDelBtn.title = "클릭 시 삭제"; // x 요소의 title 속성을 "클릭 시 삭제"로 설정
    todoItem.innerText = aTodo.todoText
    todoItem.classList.add
    
    
    

// handle

// 할 일 입력 후 제출하면 발생하는 이벤트 핸들링
todoForm.addEventListener('submit', function(e) {
  e.preventDefault(); // 원래 있는 기능은 사용하지 않겠다는 선언
  
  // 새로 추가 될 할 일 객체
  const toBeAdded = {
    todoText : todoForm.todo.value,
    todoId: new Date().getTime(), // 이 객체만이 가지고 있는 고유한 값(식별자)
    todoDone: false
  }

  todoForm.todo.value = ""
  todoArr.push(toBeAdded); // 배열에 추가
  displayTodos(); // 할 일 목록을 다시 표시
  saveTodos(); // 저장
}
);

loadTodos(); // 저장된 할 일 목록을 불러옴