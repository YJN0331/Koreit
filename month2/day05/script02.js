// 객체 : 자바스크립트 코드 내에서 객체란 '값 또는 기능을 가지고 있는 데이터' 
/*
  생성자 : 객체를 생성 할 때 사용하는 함수로서, '생성자 함수' 라고도 한다.
  사용할 기능을 정의한 일반 함수와 생성자 함수 사이에 문법적 차이는 없다.
  즉, 함수는 생성자 역할을 할 수 있다.
  단, 생성자 함수는 객체 생성을 목적으로 만든다.

  생성자의 쓸모는 자바스크립트가 제공하지 않는 유형의 데이터를 창조하는 것이다.
*/
/*
  this 키워드를 사용해 보자
  생성자 함수를 사용하는 경우,
  this 키워드는 객체 그 자신을 의미한다.
  function Dog() {
    this.name = "콩이" // 여기서 this가 Dog라는 생성자 자신을 뜻 함. 즉, Dog라는 생성자의 name이 됨.
    this.breed = "시츄" // 
    this.age = 2
  }
  * 일반적으로 생성자 함수명의 첫 글자는 대문자로 한다(관례)
  
  생성자 함수는 '객체를 이렇게 만들겠습니다'라는 의미를 가질뿐
   실제 객체가 생성되기 위해서는 new 키워드를 사용해야 한다.
  
  function Dog() {
    this.name = "콩이" 
    this.breed = "시츄" 
    this.age = 2
  }

  const myDog = new Dog(); // Dog 객체를 생성하고, myDog 변수에 저장한다.(myDog라는 이름을 붙이겠다.)
  console.log(myDog.name); // 콩이
  console.log(myDog.breed); // 시츄
  console.log(myDog.age); // 2살

  생성자 하나로 여러 개 만들기
  생성자 함수는 '객체를 이렇게 만들겠습니다'라는 설계, 정의 역할을 한다.
  따라서 생성자 함수 하나로 객체를 여러 개 만들 수 있다.

  function Dog() {
    this.name = "콩이" 
    this.breed = "시츄" 
    this.age = 2
  }
  const one = new Dog();
  const two = new Dog();
  console.log(one.name); // 콩이
  console.log(two.name); // 콩이

  생성자 함수에도 매개변수를 정의 할 수 있다.
  function Dog(eachName, eachBreed, eachAge) {
    this.name = eachName
    this.breed = eachBreed
    this.age = eachAge
  }
  생성 할 때도 인자를 전달 할 수 있다.
  const oneDog = new Dog("콩이", "시츄", 2);
  const twoDog = new dog("바둑이","진돗개",3);
  const threeDog = new Dog("마르코", "셰퍼드", 1);

  