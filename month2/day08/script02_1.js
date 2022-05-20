
//1부터 45까지 배열
const lottoNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
const myNumber = new Array(2, 16, 27, 33, 35, 41) 
const lotto = document.getElementById("lotto"); //div
// id=lotto인 div 영역 안에 숫자를 하나,하나 추가하고 싶은 상태

//배열 요소 하나씩 접근해서 웹에 차례대로 출력하기
for(let i = 0; i < myNumber.length; i++) {
  `<div>${myNumber[i]}</div>`

}

