// Write a program to check whether the number is positive, negative, or zero. Additionally, if the number is positive, check if it is even or odd.
let num = 6;
if(num > 0){
    console.log("positive");
    if(num % 2 ==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
else if(num < 0){
    console.log("Negative");
    if(num % 2 ==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
else{
    console.log("Neither Even nor Odd");
    console.log("Neither Positive nor Negative");
}




// write a program to add two numbers if only both are even numbers
let num1 = 4
let num2 = 6
if(num1%2 == 0 && num2%2 == 0){
    console.log(num1 + num2);
}
else{
    console.log("Not Valid");
}


// Write a program with a num prints the multiplication table for that number from 1 to 10 using a loop.

let n = 5
for(let i = 1;i<=10;i++){
    console.log(n +" * " +i+" = " +n * i);
}