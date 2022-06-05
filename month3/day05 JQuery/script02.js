
$(document).ready(function () {

const button = document.querySelector("#samsung-btn");
button.addEventListener("click", function () {
  const h1 = $("h1")

  if(h1.hasClass("apple")){
    h1.removeClass("apple")
    $(".samsung").text("삼성")
  }
  else{
    h1.addClass("apple")
    $(".apple").text("애플")
  }  
})
});


$(document).ready(function () {

  const button2 = document.querySelector("#sbtn");
  button2.addEventListener("click", function () {
    const h1 = $("h1")
    h1.toggleClass("apple")

    $(".samsung").text("삼성")
    $(".apple").text("애플")
  })


  const input = document.querySelector("input[type]");
  input.addEventListener("click", function() {
    console.log($("select").val());
    

  })


});


$(document).ready(function () {

  /* const result = $("body").html()
   console.log(result)*/

  // $("선택자").html() 요소의 하위 요소를 읽거나 새로 쓰기
  // $("body").html()
  // $("body").html("<h1>안녕하세요</h1>")
  // $("#dog").text() // 강아지인데 개로 바꾸고 싶으면 ()안에 "개"를 넣으면 됨
  /*$("#dog").text("개")

  //$("선택자").css() 선택한 요소의 스타일 속성 값 읽거나 새로 쓰기 
  console.log($("#dog").css("color")) //강아지의 색깔을 읽어옴
  console.log($("#dog").css("color", "red")) //강아지의 색깔을 빨간색으로 바꿈
  console.log($("#dog").css("font-size")) //강아지의 글씨 크기를 읽어옴

  //$("선택자").attr() 선택한 요소의 속성 값 읽거나 새로 쓰기
  console.log($("#dog").attr("id")) //강아지의 id를 읽어옴
  console.log($("#dog").attr("id", "dog2")) //강아지의 id를 강아지2로 바꿈
  console.log($("#dog").attr("class")) //강아지의 class를 읽어옴
  console.log($("#dog").attr("class", "dog2")) //강아지의 class를 강아지2로 바꿈

  //$("선택자").addClass()  선택한 요소에 클래스 추가
  console.log($("#dog").addClass("dog2")) //강아지에 클래스 dog2를 추가함

  //$("선택자").removeClass() 선택한 요소에서 클래스 제거
  console.log($("#dog").removeClass("dog2")) //강아지에서 클래스 dog2를 제거함

  //$("선택자").toggleClass() 선택한 요소에 클래스 추가 또는 제거
  console.log($("#dog").toggleClass("dog2")) //강아지에 클래스 dog2를 추가하고 제거함

  //$("선택자").hide() 선택한 요소를 숨김
  console.log($("#dog").hide()) //강아지를 숨김

  //$("선택자").show() 선택한 요소를 보임
  console.log($("#dog").show()) //강아지를 보임

  //$("선택자").toggle() 선택한 요소를 보임 또는 숨김
  console.log($("#dog").toggle()) //강아지를 보임 또는 숨김

  //$("선택자").fadeIn() 선택한 요소를 페이드 인
  console.log($("#dog").fadeIn()) //강아지를 페이드 인

  //$("선택자").fadeOut() 선택한 요소를 페이드 아웃
  console.log($("#dog").fadeOut()) //강아지를 페이드 아웃

  //$("선택자").fadeToggle() 선택한 요소를 페이드 아웃 또는 페이드 인
  console.log($("#dog").fadeToggle()) //강아지를 페이드 아웃 또는 페이드 인

  //$("선택자").hasClass() 선택한 요소가 특정 클래스를 가지고 있는지 여부
  console.log($("#dog").hasClass("dog2")) //강아지가 클래스 dog2를 가지고 있는지 여부

  //$("선택자").val() 선택한 요소의 값 읽거나 새로 쓰기
  console.log($("#dog").val()) //강아지의 값을 읽어옴
  console.log($("#dog").val("강아지2")) //강아지의 값을 강아지2로 바꿈
*/

});

