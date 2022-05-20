// 자바스크립트 객체 표기법에 맞게 문자열을 생성하자! with JSON


const todo = {
  text: "JSON 이해하기",
  isDone: false,
  priority: 1,
  emotion : "정이 안 간다."
}

console.log(todo)

// 객체 to 문자열
const todoStr = JSON.stringify(todo)
console.log(todoStr)
console.log(typeof todoStr)

const dragonball = `{
  "main" : "손오공"
}`
const db = JSON.parse(dragonball)
console.log(db)
console.log(typeof db)


