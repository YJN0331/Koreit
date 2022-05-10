/*
const todoList = []
*/

const todoList = [{
  todoList: "밥먹기",
  isDone: false
}, {
  todoList: "학원가기",
  isDone: true
}]

const todoList2 = [...todoList,{
  todoText: "잠자기",
  isDone: false
}]

const todoList3 = [todoList2,{
  todoFast: "누구보다 빠르게",
  isDone: false
}]

console.log(...todoList)
console.log(...todoList2)
console.log(...todoList3) //(...)는 배열을 전개해주는 구문이다.