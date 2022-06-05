//  로또 번호를 관리하는 데 필요한 변수들

const lotto = [];
let isCreate = false; // 추첨되는 동안에 추첨 버튼이 동작하지 않게
let step = 0; // 로또 번호 표시 할 때 순서를 나타내는 변수
let intervalId = 0; // 주기 별 동작의 관리 번호
const createComment = ["생성 중.", "생성 중..", "생성 중...", "생성 중"];


/* 
1. 페이지가 시작 할 때 호출 될 함수
2. 로또 번호를 초기화 하는 함수
3. jsBtn을 클릭하면 로또 번호를 추첨하는 함수
4. 1부터 45까지 숫자를 div로 각각 표시
*/

function resetNumbers(){
  clearNumbers();

  $(".result").empty();
  $('.js-reset').hide();
}

// 추첨 된 숫자를 표시하는 함수
function displayNumbers() {
  const nNumberContainer = $("<div></div>");
  nNumberContainer.attr('class', 'cNumbers');
  for(let i=0; i<6; i++) {
    const nNumber = $("<div></div>");
    nNumber.attr('class', `cNumber`);
    nNumber.text(`${lotto[i]}`);
    if(lotto[i] < 10) {
      nNumber.css("backgroundImage", "linear-gradient(to bottom, #eccd84 0%,#d5ac56 100%)");
    } else if(lotto[i] < 20) {
      nNumber.css("backgroundImage", "linear-gradient(to bottom, #7aade2 0%,#4e88cf 100%)");
    } else if(lotto[i] < 30) {
      nNumber.css("backgroundImage", "linear-gradient(to bottom, #f58477 0%,#dd5649 100%)");
    } else if(lotto[i] < 40) {
      nNumber.css("backgroundImage", "linear-gradient(to bottom, #707070 0%,#484f56 100%)");
    } else {
      nNumber.css("backgroundImage", "linear-gradient(to bottom, #a0dc92 0%,#73c163 100%)");
    }
    nNumberContainer.append(nNumber);
    nNumberContainer.css('display','none'); // 안 보이게 해두고
  }
  $(".result").append(nNumberContainer);
  nNumberContainer.fadeIn(1500); // 6개가 다 끝나면 스르륵 나타나게 애니메이션 시작
  $(".js-reset").show(); // 초기화 버튼도 노출 

};


// 선택 된 숫자를 초기화
function clearNumbers(){
  $('.selected').removeClass('selected');
}


// 45개의 숫자 중 로또 번호를 선택, 표시하는 함수
function pointNumbers() {
  $(`#no-${lotto[step]}`).addClass("selected");  // 색칠 css 적용
  $('.ing').text(createComment[step % 4]); // 생성 중 문구를 보여줌
  step++;
  // 여섯 개 다 색칠되면 끝내기
  if (step === 6) {
    clearInterval(intervalId);
    displayNumbers(); // 추첨 완료 된 숫자를 결과 화면에 표시
    $('.ing').removeClass("visible");
    step = 0;
    isCreate = false;

  }
};

// 랜덤 로또 번호 6개를 추첨하는 함수
function createLottoNumbers() {
  if (isCreate) {  // 추첨되는 동안에는 추첨 버튼이 동작하지 않게 함수를 강제 종료,
    return;        //  isCreate가 true면 return
  }
  isCreate = true; //false면 true로 바꿔줌

  lotto.splice(0, 6); // 로또 배열을 지우는 작업부터 lotto=[]; splice(0번 인덱스부터 6개를 지운다)
  
  clearNumbers(); // 화면에 표시 된 여섯개 지우기

  while (lotto.length < 6) {
    const number = Math.floor(Math.random() * 45) + 1;
    if (lotto.indexOf(number) === -1) {
      lotto.push(number);
    }
  }
  
  $('.ing').addClass("visible"); // 이제 p태그가 보여도 되는 상태('생성 중')

  // 순서대로 하나하나 색칠을 하기 위한 인터벌(주기) 설정
  intervalId = setInterval(pointNumbers, 500); 
}




// 1부터 45까지 숫자를 div로 각각 표시
function createWholeNumber() {
  for (let i = 1; i <= 45; i++) {
    const numDiv = $(`<div id = "no-${i}"></div>`)
    numDiv.html(`<p class="number">${i}</p>`);
    $(".js-numbers").append(numDiv);
  }
};


// 페이지 시작 할 때 호출 될 함수
function init() {
  createWholeNumber(); // 1부터 45까지 숫자를 div로 각각 표시
  $('.ing').removeClass("visible"); // CSS로 처리 됨
  $(".js-btn").on("click", createLottoNumbers); // 추첨하기 버튼을 누르면 추첨 시작
  $(".js-reset").on("click", resetNumbers); // 초기화 버튼을 누르면 모두 없애기 

};


// 초기 UI 세팅, 이벤트 등록
$(function () {
  init();
});
