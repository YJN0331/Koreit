/*
Math.random()은 0 이상 1 미만의 실수를 랜덤하게 반환!
console.log(Math.random());
1 이상 46 미만의 정수를 랜덤하게 반환해야 로또 번호를 만들 수 있다.
console.log(Math.random());를 가공해야 된다.
Math.random() * 46 을 하면 0 이상 46 미만의 실수가 나온다.
*/
console.log(Math.random() * 46);
// Math.floor()는 소수점 이하를 버리는 함수
console.log(Math.floor(Math.random() * 46));  // 0 이상 45 미만의 정수
// 0이 아닌 1 이상이어야 되기 때문에 +1을 해준다
console.log(Math.floor(Math.random() * 46) + 1);
/*
const lotto = [];
for(let i = 0; i < 6; i++) {
  lotto.push(Math.floor(Math.random() * 45) + 1);
}
console.log(lotto);
중복 숫자가 나와서 안 됨
*/
/*
const lotto = [];
while(lotto.length !=6) {
  let randomNumber = Math.floor(Math.random() * 45) + 1;
  lotto.push(randomNumber);
}
마찬가지로 중복 숫자가 나옴
*/
// indexOf : 주어진 요소가 없으면 -1을 반환한다.
const lotto = [];
while(lotto.length !=6) {
  let randomNumber = Math.floor(Math.random() * 45) + 1;
  if(lotto.indexOf(randomNumber) == -1) { // 인자(숫자)가 존재하지 않는 경우
  lotto.push(randomNumber); // 배열에 숫자를 추가해라
}  // 인자의 길이가 6이 될 때 까지 반복
}

console.log(lotto);