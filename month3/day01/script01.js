








// map 의 콜백함수에서 반환한 값은 결과물(배열)의 멤버가 된다.









//filter 의 콜백함수에서 true가 반환된 요소만 멤버가 될 수 있다.-
const characters = [
  "짱구", "손오공", "짱구", "도라에몽", "짱구"
];

// characters.filter(function(element) {
//  let isZZanggu = element === "짱구";
//  return isZZanggu;

/* 1. 
characters.filter(function(character) {
  let isZZanggu = character === "짱구";
  return isZZanggu;
  
}
);
*/

/* 2. */
/*
const result = characters.filter(function(character) {
  let isZZanggu = character === "짱구";
  return isZZanggu;
  
}
);
console.log(result);
*/

const singer = ["ABBA", "QUEEN", "박효신", "성시경", "오마이걸", "레인보우"]
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

one.addEventListener("click", function() {

  const result = singer.filter(function(element) {
    if(singer.indexOf(element) == 0 || singer.indexOf(element) == 1) {
      return true
  } else {
    return false
  }
  }
  );
  console.log(result);


result.forEach(function(element) {
  const p = document.createElement("p");
  p.textContent = element;
  document.body.appendChild(p);
}
);
});


// 미션 2, 3번 버튼 클릭의 동작도 직접 만들어보기
two.addEventListener("click", function() {
  const result = singer.filter(function(element) {
    if(singer.indexOf(element) == 2 || singer.indexOf(element) == 3) {
      return true
  } else {
    return false
  }
  }
  );
  console.log(result);
  

  result.forEach(function(element) {
    const p = document.createElement("p");
    p.textContent = element;
    document.body.appendChild(p);
  }
  );
}
);

three.addEventListener("click", function() {
  const result = singer.filter(function(element) {
    if(singer.indexOf(element) == 4 || singer.indexOf(element) == 5) {
      return true
  }
    else
    {
      return false
    } 
  }
  );
  console.log(result);

  result.forEach(function(element) {
    const p = document.createElement("p");
    p.textContent = element;
    document.body.appendChild(p);
  }
  );
}
);

  