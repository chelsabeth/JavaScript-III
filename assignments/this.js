/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding - the default of principles for the 'this' keyword
* 2. implicit binding - the most common principle to use. When a function is invoked, it will look to the left of the dot to see what the keyword is reffering to.
* 3. new binding - uses the new keyword to construct a new object, and uses 'this' to point to it
* 4. explicit binding - we can tell the JS engine to point to a explicit value using call, apply, or bind and will also use one of these properties to invoke a function with a specific value
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function banana(){
    console.log(this.fruit);
}

banana();
const fruit = '🍌';
// Principle 2

// code example for Implicit Binding
let fruitBasket = {
    name: 'banana',
    color: 'yellow',
    fruit: function() {
        console.log(this.name);
    }
}

fruitBasket.fruit(); //invoking function 
// Principle 3

// code example for New Binding
function Food(healthy) {
    this.food = healthy;
}
 
let myHealthySnack = new Food('bananas');

console.log(`for a healthy snack I like to eat ${myHealthySnack.food}`);
// Principle 4

// code example for Explicit Binding
function name() {
    console.log(this.name)
}

let myInfo = {
    name: 'Chelsea',
    age: 21,
    gender: 'F'
}

name.call(myInfo); 