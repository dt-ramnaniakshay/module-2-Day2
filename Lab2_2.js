//if else
/*
Dynamic = > we want to display some content based on some condition
operators , ==, >=, <=, ===, !=
AND and OR operators
*/

var OneVar = 11 
var TwoVar = 2

if (TwoVar % 2 == 0){
    console.log("even number");
}else{
    console.log("Odd number");
}

//2 => will be checking age of a person will tell them are they are eligible for driving license, gearless 16 are eligible as well
//nested if conditions

var personAge=17

if (personAge>=16){
    console.log("Person is eleigible for gearless licence");
    if (personAge >= 18){
        console.log("Person is eligible for with gear licence");
    }
}else{
    console.log("Person is not eligible");
}

/*
== it will check for value only
=== it will check for value and data type as well
!= it will verify that value is not the same
*/
var weightOne = 68
var weightTwo = "68"

if (weightOne === weightTwo){
    console.log("weight is same only");
}else{
    console.log("weight is not same");
}

var weightThree = 60
var weightFour = 80

if(weightFour != weightThree){
    console.log("enter weight are different");
}

/*
you need to take input of person age 
18>= person is eligible for vote
65>= person is not eligible for vote
18<= you are not allowed to vote
*/

//template literals => this gives you little advance way to print variable

var oneVariable = "lol"
var TwoVaraible  = 890
var ThressVariable = true

console.log(`Variable one's value is ${oneVariable} \n Variable two value is ${TwoVaraible}\t variable thirds value is ${ThressVariable}`);

console.log("Variable one 's value is ",oneVariable,"second varable's value is", TwoVaraible,"Third variables value is ",ThressVariable);


//ternnary operator
var age = 25
var isAdult = age>= 18 ? true : false

if (age >= 18){
    console.log(true);
}else{
    console.log(false);
}

console.log(isAdult);
