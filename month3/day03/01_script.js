/*
오픈 소스 API, DOG API를 사용했다!
여기서  API란 무엇인가?

API( Application Programming Interface )
프로그램이나 웹을 개발 할 때 사용 할 수 있는 자원을 제공하기 위해
만든 URL이나 소스 코드 따위를 통칭하는 말.


*/

const dogBtn = document.getElementById("dog-btn");
const request = new XMLHttpRequest();

// 요청에 대한 응답이 왔다! 라는 이벤트!
request.addEventListener("load", function() {
  
  //응답 결과가 담겨있는 속성
  console.log(request.responseText)

  // 응답 결과 문자열을 객체로 변환해서 처리하고 싶다면?
  const result = JSON.parse(request.responseText);
  console.log(result.message);

  const img = document.createElement("img");
  img.src = result.message;
  document.body.appendChild(img);
    
});


dogBtn.addEventListener("click", function() { 

  request.open('GET', 'https://dog.ceo/api/breeds/image/random');
  request.send();
  
});



