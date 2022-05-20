const h1 = document.querySelector("h1");

console.log(h1.classList);

const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");  
const toggleBtn = document.getElementById("toggle");
const itemBtn = document.getElementById("item");
const containsBtn = document.getElementById("contains");
const replaceBtn = document.getElementById("replace");

addBtn.addEventListener("click", function() {
  h1.classList.add("colored");
});
removeBtn.addEventListener("click", function() {
  h1.classList.remove("colored");
});
toggleBtn.addEventListener("click", function() {
  h1.classList.toggle("colored");
});
itemBtn.addEventListener("click", function() {
  console.log(h1.classList[0]);
});
containsBtn.addEventListener("click", function() {
  console.log(h1.classList.contains("colored"));
}
);
replaceBtn.addEventListener("click", function() {
  h1.classList.replace("colored", "blue");
}
);