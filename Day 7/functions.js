//function

function greet(){
    console.log("Hello,welcome to the world of functions");

}
greet();

//2 ways funciton
//1.function declaration
//we declared what the function is named
function sqaureDeclaration(num){
    return num*num;
}


//2.function declaration
// the function is 
const squareExpression =function (num){
    return num*num;

}

console.log("Square for Func. Declaration: ",sqaureDeclaration(6));
console.log("Square for func. expression:",squareExpression(5));


//Function Hoisting- only works for 'function' declaration
// delcare a function without declaring yet

sayHello();

function sayHello(){
    console.log("HEllo, function hoisting")
}

//anonymous function 
//execute exacly after being declared
const anonymousFunction = function () {
	console.log("Hello anonymous function");
};

anonymousFunction();