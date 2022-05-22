// 요소 선택
const yearDiv = document.getElementById('year');
const monthDiv = document.getElementById('month');
const dayDiv = document.getElementById('day');
const hourDiv = document.getElementById('hour');
const frontminuteDiv = document.getElementById('frontminute');
const minuteDiv = document.getElementById('minute');
const afterminuteDiv = document.getElementById('afterminute');
const secondDiv = document.getElementById('second');

// getTime 함수
function getTime(){
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hour = now.getHours();
  let frontminute = (now.getMinutes()-1);
  let minute = now.getMinutes();
  let afterminute =  (now.getMinutes()+1);
  let second = now.getSeconds();

  month = month < 10 ? `0${month}` : month;
  date = date < 10 ? `0${date}` : date;
  hour = hour < 10 ? `0${hour}` : hour;
  frontminute = frontminute < 10 ? `0${frontminute}` : frontminute;
  minute = minute < 10 ? `0${minute}` : minute;
  afterminute = afterminute < 10 ? `0${afterminute}` : afterminute;
  second = second < 10 ? `0${second}` : second;

  yearDiv.textContent = `${year}`
  monthDiv.textContent = `${month}`
  dayDiv.textContent = `${date}`
  hourDiv.textContent = `${hour}`
  frontminuteDiv.textContent = `${frontminute}`
  minuteDiv.textContent = `${minute}`
  afterminuteDiv.textContent = `${afterminute}`
  secondDiv.textContent = `${second}초`
  
}

// setInterval 메소드
getTime()
setInterval(getTime, 1000);