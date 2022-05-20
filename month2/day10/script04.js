const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

const myPet = {
  petName: form.petname.value,
  petRace: form.petrace.value,
  petAge: form.petage.value,
  petCharacter: form.petcharacter.value

}
console.log(myPet);

localStorage.setItem(form.petname.value, JSON.stringify(myPet));
})