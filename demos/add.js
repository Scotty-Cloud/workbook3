//number 1 and number 2 are function parameters
function add(number1, number2) {
  var result = number1 + number2;
  console.log(result);
}

var x = 67;
var y = 34;
//x and y are arguments being passed to the function
add(x, y);

add(1, 1);
add(2, 2);
add(3, 3);

// function bake(ingredient1, ingredient2, ingredient3) {
//     if(ingredient1 =="apples"){
//         console.log("apple pie");
//     }
// }

// bake("apples", "cinnamon", "sugar")


function displayNameAndAge(name, age) {
  let message = name + " is " + age; console.log(message);
  }
  // elsewhere
  let someName = "scott";
  let someAge = 999;
displayNameAndAge(someName, someAge); someName = "bob";
someAge = 9999; displayNameAndAge(someName, someAge);