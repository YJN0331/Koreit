$(function () { // 그룹 메소드
  // on : 하나 이상의 이벤트 핸들러 등록이 가능
  /* $(".box").on({
    "속성명(key,=이벤트명)": "속성값(value,=이벤트핸들러 함수function)"  -> 객체리터럴 형태
    });
    $(".box").on({
      click: function () {},
      mouseover: function () {},
      mouseout: function () {}
    });
  
*/
/* 객체 리터럴로 객체를 생성하는 방법
    const plus = {a1 : 1, a2: 2}
    console.log(plus);
    여기에서 {}안의 내용이 객체 리터럴이다     
    
*/ 

  $(".box").on({

    click: function () {
      // alert("click");
      console.log("click");
      $(".box").css("width", "200px");
    },
    mouseenter: function () {
      //alert("mouseenter");
      $(".box").css("background-color", "yellow");
      $(".box").css("width", "400px");    
    },
    mouseleave: function () {
      //alert("mouseleave");
      $(".box").css("background-color", "green");
    }
 

  });
});


//delegate : 요소의 하위 요소에 한 개 이상의 이벤트 등록 가능
$(function () {

  $("body").delegate("div","click" , function() {
    console.log("delegate");
  });



});

// one() : 요소에 단 한 번만 발생할 이벤트 등록 가능, 그룹등록 가능 
$(function () {
  $(".box").one("click", function () {
    console.log("one()");
  });

  $(".box").on({
    click : function() {console.log("click");},
    mouseenter : function() {console.log("mouseenter");},
    mouseleave : function() {console.log("mouseleave");}
  }); 

  $("#click").on("click", function() {
    $(".box").off("click");
  });
  $("#enter").on("click", function() {
    $(".box").off("mouseenter");
  });
  $("#leave").on("click", function() {
    $(".box").off("mouseleave");
  });
  $("#all").click(function() {
    $("body").off();
    $(".box").off();
  })

});