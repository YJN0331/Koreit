$(function () {

  $(".box").on("click", function () {

    $("#text").focus();

  });

  $("#text").on("focus", function () { // 핸들러 있는 포커스는 포커스 이동이 되지 않는다.
    this.value = "초점을 맞췄습니다.";
  })

  

  
});