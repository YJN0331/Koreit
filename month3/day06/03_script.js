$(function(){

  const main = $('.main');
  const div = $('.container');
  const btn1 = $('#before');
  const btn2 = $('#after');
  const btn3 = $('#prepend');
  const btn4 = $('#append');
  const btn5 = $('#empty');
  const btn6 = $('#remove');
  const btn7 = $('#add-div');

  // JQuery로 선택한 결과물의 특징은 요소의 숫자와 관계없이 배열의 형태로 만들어진다.
  // 따라서 인덱싱이 가능하다 console.log(div[0])
  // 그리고 그 안의 내용은 각각의 요소의 속성을 가지고 있다.
  //  

  console.log(div[0]);
  
  btn1[0].addEventListener('click', function(){
    
    /*const p = document.createElement('p');
    p.textContent = "document.createElement('p')";*/
    // 제이쿼리로 요소 추가하기
    const p = $("<p></p>");
    p.text("요소 추가");
    div.before(p);
  });

  btn2[0].addEventListener('click', function(){
    var p = $("<p></p>");
    p.text("after")
    div.after(p);
  });

  btn3[0].addEventListener('click', function(){
    var p = $("<p></p>");
    p.text("prepend")
    div.prepend(p); // div의 안 쪽 맨 앞에 p를 추가한다
  });

  btn4[0].addEventListener('click', function(){
    const p = $("<p></p>");
    p.text("append") 
    div.append(p); // div의 안 쪽 맨 뒤에 p를 추가한다.
  });

  btn5[0].addEventListener('click', function(){
    div.empty(); // div의 하위 요소 전부 제거

  });

  btn6[0].addEventListener('click', function(){
    div.remove(); // div 자신을 제거
  });

  btn7[0].addEventListener('click', function(){
    const adddiv = $("<div></div>");    
    main.append(adddiv);    
    $("div").attr("class","container");
  });







});