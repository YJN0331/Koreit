/*  
JQuery의 대표적인 사용 코드는 다음 세 가지와 같다.
$(handler)
$("document").ready(handler)
$(document).ready(handler)
JQuery 3.0 버전 부터는 $(handler) 구문만 사용하는 것을 권장한다.
1.8 버전에서 deprecated(사용하지 않게)되어 3.0은 지원하지 않기 때문이다.

따라서 앞으로 $(function(){});을 사용하자.
*/

$(function(){
  // jsinput은 Jquery를 사용하지 못한다.
  const jsInput = document.getElementById("text");
  const input = $("#text");
  const p = $("#current");
  const div = $("div");
  div.addClass("container");
  const container = $(".container");
  $(".container").text("Hello");
  $(".container").css("border", "5px solid red");
  console.log(container.width());
  console.log(container.height());
  console.log(container.innerWidth());
  console.log(container.innerHeight());
  console.log(container.outerWidth());
  console.log(container.outerHeight());
  // 인자 전달 안하면 읽기, 하면 덮어쓰기(px 단위의 수치를 넣기)
  console.log(container.width(500));
  console.log(container.height(500));


  p.addClass("p-class");
  const pClass = $(".p-class");


  pClass.css("boder", "14px solid red");

  // 입력 요소의 입력값이 변할 때의 이벤트 처리
  // 입력 요소에서 값을 읽을 때는 val()
  // 출력 요소에서 값을 읽을 때는 text()
  jsInput.addEventListener("change",() => {
    const value = input.val()
    p.text(value)

    
  });
  
  
});