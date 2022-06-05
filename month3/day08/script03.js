
$(function () {

  $("#dog").on("click", function () {

    $.ajax({
      // 요청을 보낼 대상 서버 url
      url: "https://dog.ceo/api/breeds/image/random/5",
      // 요청 방식
      type: "GET",
      // 요청에 필요한 정보
      dataType: "json",
      // 요청이 성공했을 때 실행할 함수
      success: function (response) {
        console.log(response);
        /* 
        미션 : 전달받은 데이터에서 사진 소스만 발췌해 표시하기
        이미지 태그를 생성하여 화면에 추가하면 됩니다.
        // */

        const src = response.message;
        const img = $("<img>");
        img.attr("src", src);

        $("body").append(img);
      }
    })


    // for(let i = 0; i < 5; i++){
    //   const img = document.createElement("img");
    //   img.src = response.message[i];
    //   img.width = 200
    //   img.height = 200
    //   $("body").append(img);
    // }
  })
})



