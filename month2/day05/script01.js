/*
// 삼항연산식
// age >= 20 ? "성인" : "미성년자"

let age = prompt("나이를 입력하세요.");
age = parseInt(age);
let result = age >= 20 ? "성인" : "미성년자";
alert(result);

*/

let grape = 111;

// 5개 씩 담을 수 있는 바구니. 모두 담으려면 바구니가 몇 개 필요한가?
let fullBucket = Math.floor(grape / 5);

//소수점 이하를 제거하는 math.floor()

console.log(fullBucket);

// grape % 5 ===0 ? 0 : 1;

let lastBucket = fullBucket + (grape % 5 == 0 ? 0 : 1);

console.log(lastBucket);