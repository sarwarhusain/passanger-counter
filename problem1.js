let myPoint = 3;
//Create two functions ,add3Point() and removePoint() ,and have them
//add/remove points to/from the myPoints variable

function add3Point() {
  myPoint += 3;
}

function removePoint() {
  myPoint -= 1;
}

add3Point();
add3Point();
add3Point();
removePoint();
removePoint();

//call the functions to that the line below logs out 10
console.log(myPoint);
