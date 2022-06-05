$(function () {

  $(window).scroll(function () {

    console.log("스크롤 이동 중");
    console.log($(this).scrollTop());
    
  });

  $("#menu").on("change",function() {
    console.log($(this).val());
    const p = $("<p></p>")
    p.text($(this).val());
    $(".long").append(p);



  });

  

  

  
});