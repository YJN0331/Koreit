const api = `https://dog.ceo/api/breeds/image/random/${numOfPhoto}`;
const request = new XMLHttpRequest();
const callBtn = document.getElementById("call-btn");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const photoDiv = document.getElementById("photo");
const beginning = document.getElementById("beginning");

const photos = [];
const numOfPhoto = 5;
let photoIndex = 0;
let isPushed = false;

// callPhotos 함수
function  callPhotos() {
  request.open("GET", api);
  request.send();
}

// load 이벤트 핸들링
request.addEventListener("load", function() {
  const result = JSON.parse(request.responseText);
  result.mesage.forEach(function(photo) {
    photos.push(photo);
  });
  console.log(photos);
  photoDiv.style.backgroundImage = `url(${photos[photoIndex]})`;
});

// prevBtn, nextBtn 클릭 이벤트 핸들링
prevBtn.addEventListener("click", function() {
  if(photoIndex === 0) {
    photoIndex = photos.length - 1;
  } else {
    photoIndex--;
  }
  photoDiv.style.backgroundImage = `url(${photos[photoIndex]})`;
});

nextBtn.addEventListener("click", function() {
  if(photoIndex === photos.length - 1) {
    photoIndex = 0;
  } else {
    photoIndex++;
  }
  photoDiv.style.backgroundImage = `url(${photos[photoIndex]})`;
}); 

// callBtn 클릭 이벤트 핸들링
callBtn.addEventListener("click", function() {
  if(isPushed) {
    return;
  }
  isPushed = true;
  callPhotos();
});
