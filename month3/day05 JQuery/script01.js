// JQuery 선택자 기본형 $()
// 제이쿼리 실행문 적용 준비 $(document).ready(function(){});
// 앞에 생략 $(function){});


// 인접 관계 선택자
$(document).ready(function(){
  console.log($("*"))
  console.log($(".rodents"))
  console.log($("#dog").parent())
  console.log($("#dog").parents())
  console.log($("ul").children())
  console.log($("ul").prev())
  console.log($("#dog").prev())
  console.log($("#dog").next())
});

//위치 탐색 선택자
$(document).ready(function(){
  console.log($("#dog").first())
  console.log($("#dog").last())
  console.log($("li"))
  console.log($("#dog").eq(1))
  console.log($("li").eq(0))
  console.log($("li").eq(-2))//뒤에서부터 셀 수 있다.
  console.log($("li").eq(-1))
  console.log($("li").slice(1)) //1번부터 뒤에까지 전부 다
  console.log($("li").slice(1,3)) //1번부터 3번까지 전부 다


});

// 속성 탐색 선택자
// html 속성 : attributes   ex)p id="속성"
// js 속성 : property     ex)document.속성
$(document).ready(function(){
  //속성 선택자
  //console.log($("선택자[속성]"))
  console.log($("li"));
  console.log($("li[id]"));
  console.log($("li[id=dog]"));

  //히든 선택자
  //console.log($("선택자:hidden"));
  console.log($("li:hidden"));

  // 비저블 선택자
  //console.log($("선택자:visible"));
  console.log($("li:visible"));


});


$(document).ready(function() {

  console.log($("ul").contents());

  console.log($("li").not("#dog")); //dog를 제외한 모든 li
  console.log($("li").has("#dog")); //dog를 포함하는 요소만 선택
  console.log($("li").filter("#dog"));
  console.log($("ul").find("#dog")); //ul의 자식인 dog를 찾는다




});