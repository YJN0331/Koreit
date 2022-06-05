$(function () {

  const object = $("#object");
  const menuBtn = $("#menu");


  // 제이쿼리 애니메이션 효과 메소드의 듀레이션 기본값은 400ms이다.
  // 듀레이션을 지정하려면 object.hide(듀레이션값); 이런식으로 사용한다.  
  // 선택적 두 번째 인자는 바로 콜백함수 : 애니메이션효과 끝나고 나서의 동작
  menuBtn.on("click", function () {    
    object.slideToggle(1000, function(){
      console.log("slideToggle")
    });
  });


  

  
});