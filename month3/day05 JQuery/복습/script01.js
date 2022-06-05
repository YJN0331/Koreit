// 제이쿼리 실행문 적용 준비
$(document).ready(function(){

  // 제이쿼리 선택자의 결과는 배열 형태를 띈다.

  console.log($("li").slice(1,4)); // 인덱스 1부터 4까지의 요소를 선택한다.

  console.log($("li[id]")); // id가 존재하는 li



});

$(document).ready(function(){
  console.log($("ul").contents());

day06 copy  console.log($("ul").has("#dog")); // id가 dog인 요소를 포함하는 ul요소를 선택한다.
  console.log($("li").not("#dog")); // id가 dog인 li요소를 제외한다.
  console.log($("li").filter("#dog")); // id가 dog인 li요소를 선택한다.
  console.log($("ul").find("#dog")); // ul선택자의 하위 요소가 id가 dog면 선택한다. 
});