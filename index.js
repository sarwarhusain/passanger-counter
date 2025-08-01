// <!-- build a passenger counter app using js -->

// document.getElementById("count-el").innerText = 5;

//projects
let countEl = document.getElementById("count-el");
console.log(countEl);

let count = 0;
function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  console.log(count);
}
