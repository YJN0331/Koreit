// 요소 선택 및 상수 선언
const numbersDiv = document.querySelector('.numbers')
const drawButton = document.querySelector('#draw')
const resetButton = document.querySelector('#reset')
const lottoNumbers = [];
const colors = ['orange', '#69c8f2', 'red', 'purple', 'green']
const redrawButton = document.getElementById("redraw");

// paintNumber 함수 : 추첨으로 나온 숫자를 영역 안에 표시하기
function paintNumber(number) {
  const eachNumDiv = document.createElement('div')
  eachNumDiv.classList.add('eachnum')
  let colorIndex = Math.floor(number / 10)
  eachNumDiv.style.backgroundColor = colors[colorIndex]
  eachNumDiv.textContent = number
  numbersDiv.appendChild(eachNumDiv)
}

// 추첨 버튼 클릭 이벤트 핸들링
drawButton.addEventListener('click', function () {
  while (lottoNumbers.length < 6) {
    let ran = Math.floor(Math.random() * 45) + 1
    if (lottoNumbers.indexOf(ran) === -1) {
      lottoNumbers.push(ran)
      paintNumber(ran)
    }
  } 
   })

// 초기화 버튼 클릭 이벤트 핸들링
resetButton.addEventListener('click', function () {
  lottoNumbers.splice(0, 6)
  numbersDiv.innerHTML = ""
  redraw();
})

function redraw() {
  while (lottoNumbers.length < 6) {
    let ran = Math.floor(Math.random() * 45) + 1
    if (lottoNumbers.indexOf(ran) === -1) {
      lottoNumbers.push(ran)
      paintNumber(ran)
    }
  }
}

