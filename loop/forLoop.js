// let cards = [7, 6, 7]

// for (let i = 0; i < cards.length; i++){
//     console.log(cards[i]);
// }

//array and dom

let sentence = ["Hello", "my", "name", "is", "sarwar"];
let greetingEl = document.getElementById("greeting-el");
// console.log(greetingEl);

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " ";
}
