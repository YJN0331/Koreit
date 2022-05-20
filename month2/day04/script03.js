/*
 함수 선언식 : function 함수명(){
    실행문;
  }
  함수 표현식 : var 함수명 = function(){
    실행문;
  }
  */

  // 변수는 데이터를 기억한 이름표
  // 함수는 코드를 기억한 주머니다
  
  console.log("춤바람");
  console.log("선수");
  console.log("후보");
  // 위 세 console.log가 계속 반복된다면
  // 보기 좋지 않고, 쉬운 코드가 쓸데없이 많다.
  // 그렇다면 코드를 기억해서 이름으로 불러주자.

  // 함수 선언식
  // function 함수이름 () { 실행문; }
  function swLee() {
    console.log("춤바람");
    console.log("선수");
    console.log("후보");
  }
// 함수 호출(함수를 사용하는 것)
swLee();

// 함수 표현식
// var 함수이름 = function () { 실행문; }
var phRoh = function () {
  console.log("하윤이");
  console.log("아빠");
  
}
phRoh();

/*
호이스팅 : 함수를 선언하고 호출하는 것, 만드는 부분보다 호출하는 부분이 먼저 올 수 있는 것
즉시 실행 : 함수를 선언하고 호출하는 것
*/
/*
 함수 선언식, 함수 표현식 차이점 : 호이스팅 가능 여부
  함수 선언식 : 호이스팅 가능
  함수 표현식 : 호이스팅 불가능
*/
