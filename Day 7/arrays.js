let fruits=['blueberry','apple','pineple'];
console.log(fruits);

//Accessing individuals elements

console.log(fruits[0]);

console.log('last fruit:',fruits[fruits.length-1]);


//modfying elements
fruits[1]='grape'
console.log(fruits);
fruits.push('strawberry');// add at the very last
console.log(fruits.pop())//take out the last one


//Array iteration
for (let i=0;i<fruits.length;i++){
    console.log('Fruits: ',fruits[i])
}

let colors = ['red','blue','white','yellow'];

colors.forEach(function(color){
    console.log("Colors: ", color);
});

fruits.unshift("lemon");//put elements in the beginig

//common array methods 
let numbers = [1,2,3,4,5];

//lenght
console.log('Array lenght: ',numbers.length);

//indexOf
console.log('index of 3:',numbers.indexOf(3));
console.log('index of white: ',colors.indexOf('white'));

//includes
console.log('includes number 5 : ', numbers.includes(5));
console.log('includes number 7 : ', numbers.includes(7));

// double quotation is required in this case : "It's a pleasure to meet you"

//join
console.log('joined array: ',numbers.join(','));

//slice doesn't alter original array
let slicedArray = numbers.slice(1,4);
console.log('Sliced arraqy: ',slicedArray);
console.log('Updated arrays: ', numbers)


//splice- alter our original array
let removedElements= numbers.splice(2,3);
console.log('Removed items: ',removedElements);
console.log('Updated arrays: ', numbers)







