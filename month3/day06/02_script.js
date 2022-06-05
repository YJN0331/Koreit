$(function(){

const one = $('#one');
const two = $('#two');
const three = $('#three');
const jsThree = document.getElementById("three");



console.log(two.position());
console.log(two.offset());
console.log(one.offset());

jsThree.addEventListener('click', function(){
  console.log($(window).scrollTop());
  location.href = '#two';

});
});