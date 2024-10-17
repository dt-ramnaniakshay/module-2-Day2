//functions

// one sort of block of code which you can repeat or reuse.

// function with 3 types

// normal function without return type

// 1. without return type
function myFirstFunction(){
    console.log("just hello world");
}
// you have to create a LineFunction which will contain actual line
myFirstFunction()

// 2. with return type

function functionB(){
    //here couple of logic steps would be written
    return 6
}

function functionC(){
    //storing value of function B in one variable which is a
    var a = functionB()
    return a+9;
}

function functionD(){
    var valueofB = functionB()
    var valueofC = functionC()
    console.log("final result",valueofB+valueofC);
}

functionD()

//passing value of a function to another one there you should consider return function

//3A. paramertrized function witout return type

function addTwoNumbers(numOne,numTwo){
    console.log("adiition of two number is ",numOne+numTwo);
}

addTwoNumbers(34,89)
console.log(addTwoNumbers(90,99));
// why we have undefined return at the end when we execute above function


// 3B. parametrized function with return type

function addTwoNumbersReturn(numOne,numTwo){
    return numOne+numTwo
}

console.log(addTwoNumbersReturn(8,9));

var finalResult = addTwoNumbersReturn(8,9)
console.log(finalResult);

//return keyword make sure you are printing that