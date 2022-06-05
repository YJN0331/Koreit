$(function () {

  const object = $("#object");
  const showBtn = $("#show");
  const hideBtn = $("#hide");
  const toggleBtn = $("#toggle");
  const otherBtn = $("#other");


  // 제이쿼리 애니메이션 효과 메소드의 듀레이션 기본값은 400ms이다.
  // 듀레이션을 지정하려면 object.hide(듀레이션값); 이런식으로 사용한다.  
  // 선택적 두 번째 인자는 바로 콜백함수 : 애니메이션효과 끝나고 나서의 동작
  hideBtn.on("click", function () {
    object.hide(1000);    
  });

  showBtn.on("click", function () {
    object.show(1000, function(){
      console.log("hide end")
    });
  });

  toggleBtn.on("click", function () {
    object.toggle(1000);
  });

  otherBtn.on("click", function () {
    // 투명도는 0이상 1이하의 실수 0.8은 80%의 선명도를 가짐
    object.fadeTo(1500,0.5); // 콜백 가능
  });

  

  

  
});