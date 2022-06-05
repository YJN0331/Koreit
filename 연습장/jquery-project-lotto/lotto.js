// 로또 번호를 관리하는 데 필요한 변수들!
const lotto = [] // 추첨된 번호 보관할 배열!
let isCreate = false;
let step = 0;
let intervalId = 0;
const createComment = ["생성중..", "생성중...", "생성중."]

function resetNumbers(){
  clearNumbers();

  $(".result").empty();
  $('.js-reset').hide();
}

function displayNumbers(){
  const nNumberContainer = $('<div></div>')
  nNumberContainer.attr('class', 'cNumbers');
  for(let i = 0 ; i < 6; i++){
    const nNumber = $('<div></div>')
    nNumber.attr('class', `cNumber`);
    nNumber.text(`${lotto[i]}`);
    if(lotto[i] < 10){
      nNumber.css('backgroundColor','orange')
    }else if(lotto[i] < 20){
      nNumber.css('backgroundColor','blue')
    }else if(lotto[i] < 30){
      nNumber.css('backgroundColor','red')
    }else if(lotto[i] < 40){
      nNumber.css('backgroundColor','yellowgreen')
    }else{
      nNumber.css('backgroundColor','purple')
    }
    nNumberContainer.append(nNumber);
    nNumberContainer.css('display', 'none');
  }
  $(".result").append(nNumberContainer)
  nNumberContainer.fadeIn(1500);
  $(".js-reset").show();
}

function clearNumbers(){
  $('.selected').removeClass('selected');
}

function pointNumbers(){
  $(`#no-${lotto[step]}`).addClass('selected');
  $('.ing').text(createComment[step%3])
  step++;
  if(step == 6){
    clearInterval(intevalId)
    displayNumbers();
    $('.ing').removeClass("visible")
    step = 0;
    isCreate = false;
  }
}

// 번호 여섯개를 추첨하자
function createLottoNumbers(){

  if(isCreate) return;
  isCreate = true;

  lotto.splice(0,6) 
  clearNumbers() 
  while(lotto.length < 6){
    const number = Math.floor(Math.random() * 45) + 1
    if(lotto.indexOf(number) === -1){
      lotto.push(number)
    }
  }
  // console.log(lotto)
  $('.ing').addClass("visible") 
  intevalId = setInterval(pointNumbers, 500) 
}

// 45개의 번호를 표시하자
function createWholeNumber(){
  for(let i = 1; i <= 45; i++){
    const numDiv = $(`<div id="no-${i}"></div>`)
    numDiv.html(`<p class="number">${i}</p>`)
    $(".js-numbers").append(numDiv)
  }
}

function init(){
  createWholeNumber(); // 번호판 만들기
  $(".ing").removeClass("visible")
  $(".js-btn").click(createLottoNumbers)
  $(".js-reset").click(resetNumbers) 
}

$(document).ready(function(){
  init(); // 초기 UI 세팅, 이벤트 등록 
})