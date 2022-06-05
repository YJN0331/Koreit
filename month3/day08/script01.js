
$(function(){
  const box = $(".box")
  

  //css 속성값을 변화시키는 메소드
  // js에서는 -가 빼기 이므로 속성명에 들어가면 오류가 남 ex)background-color
  // 그래서 카멜표기법으로 사용해야 된다.
  // 체이닝(chaining) : 메소드 호출문 뒤에 이어서 메소드를 호출하는 것
  box.animate({
    /*width: 200,
    height : 200,
    backgroundColor: "red",
    paddingTop: 200*/
    width : 200
  }, 500)
  .animate({
    width: 100,
  }, 500)
  .animate({
    width: 300,
  }, 500)
  .animate({
    width: 50,
  }, 500)






})