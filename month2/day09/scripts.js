




// 추첨 버튼 클릭 이벤트 핸들링
drawButton.addEventListener('click', function() {
  while (lottoNumbers.length < 6) {
    let ran = Math.floor(Math.random() * 45) + 1;
    if (lottoNumbers.indexOf(ran) === -1) {
      lottoNumbers.push(ran);
      paintNumber(ran);
    }
  }
})

// 다시 버튼 클릭 이벤트 핸들링
resetButton.addEventListener('click', function() {
  lottoNumbers.splice(0, 6);
  numbersDiv.innerHTML = "";
})
