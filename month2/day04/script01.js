/*
let number = 1

while(number < 3) {
  console.log(number)
  number += 1
}

while(confirm("수업 재미있나요?")) {
  console.log("재미 있다니 다행이에요~!")

}
*/
//while문으로 구현하는 몬스터 잡기 게임!

let monster = 100
let damage = Math.floor(Math.random() * 10) + 10
console.log("몬스터가 생성되었습니다. 현재 체력은 " + monster + " 입니다.")

  while(confirm("몬스터를 공격하시겠습니까?")) { 
    monster -= damage //몬스터의 체력을 감소시킴
    console.log(`몬스터에게 ${damage}의 데미지를 입혔습니다.`)
    // 만약 monster의 체력이 음수가 나오면 0으로 바꿔줌
    if (monster <= 0) {
      monster = 0
      console.log("몬스터의 체력이 " + monster + "이 되어 죽었습니다. 게임이 종료됩니다.")
      break
    }
    else if (monster > 0) {
      console.log("몬스터의 체력은 " + monster + " 입니다.")
    }
  }
  



  
  
  /*
  else {
    console.log("몬스터에게서 도망쳤습니다.")
    
  }*/




  /*
  monster -= damage //몬스터의 체력을 감소시킴
  console.log(`몬스터에게 ${damage}의 데미지를 입혔습니다.`)
  
  // 만약 monster의 체력이 음수가 나오면 0으로 바꿔줌

  if (monster <= 0) {
    monster = 0
    console.log("몬스터의 체력이 " + monster + "이 되어 죽었습니다. 게임이 종료됩니다.")
    break
  }
  else if (monster > 0) {
    console.log("몬스터의 체력은 " + monster + " 입니다.")
  }

  
}
*/