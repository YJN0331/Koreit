// 생성자 함수를 사용하자

/*
// 강아지를 한 마리 표현하고 싶다.
function Dog() {

}

// function Dog() {}는 그냥 함수인데
// new로 호출하면 객체가 생성되며 함수는 생성자가 된다.
new Dog();

*/

function Dog() {

}

const dog1 = new Dog();
console.log(dog1);

// 여기서 이 객체(데이터(값)와 메소드(기능))을 어떻게 추가하느냐
// this 키워드를 사용하면 됨.

function Cat() {
  this.name = '나비';
  this.age = 3;
}
const cat1 = new Cat();
console.log(cat1.name);
console.log(cat1.age);

// 객체를 여러개 만드려면 new 키워드를 또 쓰면 된다ㅏ.
const cat2 = new Cat();
console.log(cat2.name);
console.log(cat2.age);
// 생성자 함수를 여러개 생성 했을 때 고양이 이름이 달랐으면 좋겠다.
// 생성자 함수도 함수니까 매개변수를 추가하면 된다.
function Pig(name, age) {
  this.name = name;
  this.age = age;
}
const pig1 = new Pig("꿀꿀일", "1")
const pig2 = new Pig("꿀꿀이", "2")
console.log(pig1.name);
console.log(pig1.age);
console.log(pig2.name);
console.log(pig2.age);
// 객체가 많아지면 이름도 많아질 수 있다는 것을 확인
// 여기서 this의 용도를 알아야 된다.
// this는 한 번 밖에 안썼지만 new 할 때 마다 복제가 되었다.
// 갯수 제한이 없는 무한한 객체 설계도가 된다.



