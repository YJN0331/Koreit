const url = "https://dog.ceo/api/breeds/image/random/5";
const dogBtn = document.getElementById("dog-btn");
const request = new XMLHttpRequest();

request.addEventListener("load", function() {
  const result = JSON.parse(request.responseText)
  const imageArray = result.message;
  console.log(result)
  /*
  미션 : imageArray에 들어있는 강아지 이미지들을 전부 화면에 표시하기
  */
  imageArray.forEach(function(image) {
    const img = document.createElement("img");
    img.src = image
    document.body.appendChild(img);
  })

});


dogBtn.addEventListener("click", function() {
  request.open("GET", url);
  request.send();
});

