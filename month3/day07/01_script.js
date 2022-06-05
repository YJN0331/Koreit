$(function () {

  $(".box").on("mousemove", function (e) {
    // console.log(e.pageX);
    // p태그(클래스:position)에 텍스트를 지정해서 pageX,pageY  값이 나오게 하기

    $(".position").text(`${e.pageX}, ${e.pageY}`);

  });

  $("#text").on("keyup", function () {

    console.log("!")

    /*
    $(".current").text($("#text").val());
    이벤트 핸들러에서 this는 이벤트가 발생한 요소를 뜻한다.(js의 요소)


    */
    console.log(this.value);


  });





});