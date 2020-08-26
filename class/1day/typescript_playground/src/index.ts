console.log('Hello from Coding Temple and TS');

// Primative Types in TS: Num, Str, Bool

// Var type : Str
let randomMessage:string = 'Avengers Assemble!';
console.log(randomMessage);

// Var Type: Num
let randomNumber: number = 36;

// Esmple of float (which is a type of Num)
let random_float: number = 3.14;

console.log(`num: ${randomNumber}, float: ${random_float}`);

// Example of bool
let booTrue:boolean = true;
console.log(booTrue);

let booFalse:boolean = false;
console.log(booFalse);

// Example of Multiple types (string OR number)
let multiplayer: string | number = 100; //or "120"
console.log(multiplayer);

// Check the type of Var we are using here...
if(typeof multiplayer === 'number'){
    console.log(`${multiplayer} is a number`);
}else{
    console.log(`${multiplayer} is not a number.`);
};

// Creation of Base Class in TS -- Human Class(AKA Object)
class Human{
    name:string;
    age:number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    };
    displayName() {
        return this.name;
    };
};

let robert = new Human('Robert', 30);
console.log(robert.name);
console.log(robert.age);
console.log(robert.displayName());

// Object hecking specific instances
if(robert instanceof Human){
    console.log('Human');
}else {
    console.log('No so human')
};

// type Assertion - using the keyword as
let hello: any = 25;
let randomStatment = hello as string;
console.log(randomStatment);

let hello_anderson = 'Hello Mr. Anderson...';
let greet_anderson:any = hello_anderson.length; //because we put in a number it asserts itself as a number

let assert_short = <string>greet_anderson


// TS array 
// Basic Construction of Array in TS

let arr_items = ['Hello', 'World', 8];

// Declasre type for array
let strong_arr_string: string[] = ['Jack', 'Jackie', 'Mr Yelp', 'Goku',];

// Generic Array
let generic_array: Array<any> = [1,2,3,4, 'James', true];

// Object Array
let object_array: Object[] = [{
    'name': 'Joel',
    'age': 30
},];

// Tuple Example in TS
let example_tuple: [any, number, any, string] = ['Jake', 23, 'Poppie', 'Joel'];

// Object Literal in TS
const car = {
    make: 'honda',
    model: "cr-v",
    year: 2019,
    start: () => {
        console.log('Press Break and push button ')
    }
};

car.start();


// Fn in TS with parameters and return type
function printState(state:string): string{
    return state;
};

console.log(printState('Maine'));

// Fn in TS WITHOUT return type or return of ANY or VOID
function noReturn(deadend:any): void | any{
    return deadend;
};
console.log(noReturn(7));

import { playerAverages } from './module';

let player = new playerAverages({first_name:"Luka", last_name:'Docic', jerseyNumber:77},30);

console.log(player.getPlayerAverages('Luca', 'Doncic', 77));

// let data = document.querySelector('#Hello').innerHTML = 'Changesd by JS by way of TS';
// data.innerHTML = 'Changesd by JS by way of TS'; //

let data = document.createElement('h1')
data.innerHTML = 'Added by JS by way of TS';
document.body.append(data);
