"use strict";

// what is the output from running this code
// question 1
function test1() {
  let a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log("a = " + a);
}
test1();
// returns 7

// question 2A
function test2A() {
  if (1 == 1) {
    var a = 5;
  }
  console.log("a = " + a);
}
test2A();
// returns 5

// question 2b
function test2B() {
  if (1 == 1) {
    let a = 5;
  }
  console.log("a = " + a);
}
test2B();
// returns error because console.log is not declared within the if statement
// move console.log into if statement within the function

// question 3
let a = 4;
function test3() {
  a = 3;
  console.log("a = " + a);
}
test3();
console.log("a = " + a);
// returns error because a is not defined as a variable in the function
//let a = 3; but will still output 4

// question 4
let a = 4;
function test4() {
  let a = 7;
  console.log("a = " + a);
}
test4();
console.log("a = " + a);
// returns error because let a = 4; is global and let a = 7 is local
//

// question 5
let a = 4;
function test5() {
  a = 7;
  function again() {
    let a = 8;
    console.log("a = " + a);
  }
  again();
  console.log("a = " + a);
}
test5();
console.log("a = " + a);
// declares 4 as a global viarable and modifies global variable 'a' to 7 within the function
// 8 becomes the local variable
// output will be 8 then 7 then 7

// question 6
let a = 4;
function test6() {
  let a = 7;
  function again() {
    let a = 8;
    console.log("a = " + a);
  }
  again();
  console.log("a = " + a);
}
test6();
console.log("a = " + a);
// a = 4 is the global variable
// test6() is called and has a local variable a = 7
// again() is called with a = 8
// console.log is called with variable of a = 4