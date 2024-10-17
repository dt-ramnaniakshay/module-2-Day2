//Switch

/*
one of the way where we can test or we can show information based upon multiple conditions 

how we can use loop to iterate some things multiple times based upon condition
for
while
do while
*/

//for
//this loops is useful when you know alredy how many times you will iterate it
//printing 1 to 10 number using for loop

for(let i=0;i<=10;i++){

    console.log(i);
}

// i =0
// if i < 10
// 0 is printed
// new value of i is 1

// i = 1
// i< 10
// 1
// new value of i is 2

// i = 9
//i <10
// 9 will be printed
// 10 new value

// i = 10
// i < 10
// 10 will not be printed

//while loop
// when you dont know the exit condition in advance
let count = 0;
console.log("output from while loop");

while(count<=10) {
    console.log(count);
    count++;
}

// count =0
// count <= 10
// print count
// 1

// count = 1
// count <= 10
// print count 
// 2

// count = 10
// count <= 10
// print count
// 11 is updated value

// count = 11
// count <= 11
// terminate the loop.

// for and while loop are entry loop

// do while loop which is exit check loop
console.log("printing through do while loop");

let x= 0;
do {
    console.log(x);
    x++;
}while( x<= 10)

//while loop and for loop

// we will write a loop we will be checking even and odd numbers using loop

// contniue and break keyword

console.log("while loop if else conditions");

let numValue = 1
while(numValue<=10){
    if (numValue % 2 == 0){
        console.log("Entered number is even", numValue);
        if(numValue == 6){
            break;
        }
    }else{
        console.log("entered value is odd", numValue);
    }
    //console.log(numValue);
    numValue++;
}

// initialy you set up condition if normal user is login system will not work
// if super admin is joining then system will work (exception)

//continue : keyword to print odd numbers and I want to skip even numbers

console.log("printing odd numbers");

for(let i=0;i<10;i++){
    if (i%2==0){
        continue
        //skip this part
    }
    console.log(i);
}