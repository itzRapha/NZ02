/* 1. The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.

The value saved to kelvin will stay constant. Choose the variable type with this in mind.

2. Write a comment above that explains this line of code.

3. Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.

Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.

4. Write a comment above that explains this line of code.

5. Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.

Fahrenheit = Celsius * (9/5) + 32

6. Write a comment above that explains this line of code.

7. When you convert from Celsius to Fahrenheit, you often get a decimal number. (Don't worry about this just yet). Log the temperature in farenheit to the console.  */

let kelvin=293;
let celsius=kelvin-273;
let fa=celsius*(9/5)+32;

console.log("Kelvin: "+kelvin+", Celsius: "+celsius+", Fahrenheit: "+fa);


/* 1. In this activity, the use a variable to put in a value of score.

2. Based on the score in the variable, the code uses conditional statements (if, else if, and else) to determine the corresponding grade. 

3. If the score is 90 or above, it assigns the grade 'A'. Print the grade in the console. 

4. If the score is between 80 and 89, it assigns the grade 'B'. Print the grade in the console.

5. If the score is between 70 and 79, it assigns the grade 'C'. Print the grade in the console.

6. If the score is between 60 and 69, it assigns the grade 'D'. Print the grade in the console.

7. Otherwise, if the score is below 60, it assigns the grade 'F'.Print the grade in the console.  */


//let score=prompt("Type a Score: ");
let score=50;

if (score>=90){
    console.log("A");
}if(score<90&&score>=80){
    console.log("B");
}if(score>=70&&score<80){
    console.log("C");
}if(score>=60&&score<70){
    console.log("D");
}if(score<60){
    console.log("F");
}
