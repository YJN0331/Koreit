

$(function () {

  // 셀렉트 요소의 선택이 바뀔 때
  $("#breed").on("change", function () {
    console.log($(this).val());
    myBreed = $(this).val();
  })

  $("#dog").on("click", function () {
    //  https://dog.ceo/api/breeds/image/random

    
    myBreed = $("#breed").val();
    console.log(myBreed);
    /* 미션 : 내가 선택한 견종을 포함한 url을 만들어 요청을 보낸다
    그리고 그 결과를 받아온 강아지 이미지를 img 태그로 표시한다 */

    $.ajax({
      //https://dog.ceo/api/breeds/image/random
     
      url: "https://dog.ceo/api/breed/" + myBreed + "/images/random",
      type: "GET",
      dataType: "json",
      success: function (response) {
        const src = response.message;
        const img = $("<img>");
        img.attr("src", src);
        img.attr("width", 200);
        $("body").append(img);
       
        
      }

    })
  })
})


