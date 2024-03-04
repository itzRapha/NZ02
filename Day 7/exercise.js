/*Objective: Create a FizzBuzz program to practice loops and conditionals.
Instructions: Write a JavaScript program that prints numbers from 1 to 100
For multiples of 3, print "Fizz" instead of the number.
For multiples of 5, print "Buzz" instead of the number.
For numbers that are multiples of both 3 and 5, print "FizzBuzz.” */

for(let n=0;n<100;n++){
    if (n%3==0){
        console.log("Fizz");
        n++;
    }if (n%5==0){
        console.log("Buzz");
        n++;
    }
    console.log(n);
}
