//arrow function
const countVow = (str) => {
    let count = 0 ;
    for (const i of str){
        if(i ==='a' || i ==='e' || i ==='i' || i ==='o' || i ==='u'){
            count++;
        }
    }

    return count;
}

// let countVowles =  countVow('akansha')
// console.log(countVowles)

//for each loop and caalback function
let arr = [1,2,3,4,5];
 
arr.forEach(function printVal(val){
    console.log(val);
})

// passing callback inthe form of arrow function
//callback have 3 parameters(values, index, array)
let arr2 = ['q','e','r','d','q'];
arr2.forEach((val, index, array) => {
    console.log(val.toUpperCase(), index, array);
})

// Higher-order functions are functions that can take 
// other functions as arguments or return functions as results

//print square of each value
let arr3 = [1,2,3,4,5];
let calSquare = (val) => {
    console.log(`square of each  value ${val*val}`)
};
arr3.forEach(calSquare);

//array methods 
//map method
arr3.map((val)=>{
    console.log(val)
})

//filter method-  creates a new array of elements that give true for a condition /filter
let evenArr = arr3.filter((val) =>{
    return val%2==0;
})
console.log(evenArr)

//reduce- performs some operations & reduces the array to a single value. It returns that single value.
const sum = arr3.reduce((prev, curr) => {  //prev = first element of array, current = second elemnt of array
    return prev+curr;
});
console.log(sum)

//to find largest no:
console.log("largest no in array: ");
const max = arr3.reduce((prev, curr) => {
    return prev>curr ? prev : curr;
})
console.log(max)


//classes and objects
const employee = {
    calctax() {
        console.log('tax rate is 10%');
    },
};

const karanArjun = {
    salary : 5000,
    calctax(){
        console.log('tax rate is 20%');
    },
};

//__proto__ is used to set a prototype
//type of prototype is a reference to an object.
karanArjun.__proto__=employee;

// if object and prototype have same method, objects method will be used.

//classes
class ToyotaCar{
    constructor(brand, mileage){
        console.log("creating constructor");
        this.brandName =  brand;
    }
    start(){
        console.log('start');
    }

    stop(){
        console.log('stop')
    }

    // setBrand(brand){
    //     this.brandName =  brand;
    // }
}

let fortuner = new ToyotaCar("fortuner", 10);
// fortuner.setBrand('fortuner');

//constructor() methods: 
// automatically invoked by new
//  initializes object

//inheritance =  inheritance is passing down properties and methods from parent class to child class

class Parent {
    hello(){
        console.log('hello')
    }
}
class Child extends Parent{

}
let obj =  new Child();

class Person {
    constructor(name){
        console.log('parent constructor')
        this.species = 'home sapiens';
        this.name = name;
    }
    eat(){ console.log('eat')};
    sleep(){ console.log('sleep')}
    work(){ console.log('nothing')}
}

class Developer extends Person{
    constructor(name){
        console.log('enter child constructor')
        super(name); //to invole parent class constructor otherwise error
        // this.branch =  branch;
        console.log('exits child constructor')
    }
    work(){
        super.eat();
        console.log('Solve Problems, build projects')
    }
}

// let DevObj = new Developer("frontend");
let DevObj = new Developer("Akansha");

//Method Overriding - if child and Parent have same method, Then Child's method will be used

//super keyword = it is used to call the constructor of its parent class
//  to access the parents properties and methods


//user example
let Data = ' user College Data'

class User{
    constructor(name, email){
        this.name= name;
        this.email= email;
    }

    viewData(){
        console.log('Data:', Data);
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        Data =  'edited data'
    }
}

let Stu1= new User('A', 'abc@gmail.com')
let Stu2= new User('B', 'xyz@gmail.com')
let admin1 =  new Admin('admin', 'admin@gmail.com')

//error handling
// try{
//    // code
// } catch(err){
//     //handling error
// }



//callbacks, promises, async await
// async await >> promise chains >> callback hell


setTimeout(() => {
    console.log('hello')
}, 3000);

// synchronous means the code runs in a particular sequence of instructions given in the programs. 
// Each instruction waits for the previous instruction to complete its execution.

// Due to sunchronous programming, sometimes imp instructions get blocked due to some previous instructions, 
// which causes a delay in UI.
// Asynchronous code execution allows to execute next instructions
// immediately and doesnt block the flow.

// A callback is a function passed as an argument to another function.

function sumAdd(a,b){
    console.log(a+b);
}

function calculator(a,b, sumCallback){
    sumCallback(a,b);
}

calculator(1,2,sumAdd);

//callback hell: nested callbacks stacked below one another forming
// a pyramid structuredClone.apply(pyramid of doom)
// this style of programming becomes difficult to understand & manage.

function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('data', dataId);
            // resolve('success');
            reject("error");
            if(getNextData){
                getNextData();
            }
        }, 2000);
    })
}


//callback hell
// console.log('getting data1...')
// getData(1,() => {
//     console.log('getting data2...')
//     getData(2, () => {
//         console.log('getting data3...')
//         getData(3);
//     } );
// });

//promises is for eventual completion of task. It is an object in JS.
// It is a solution to callback hell.
// resolve & reject are callbacks provided by JS.
// 3 states in Promise => pending(result undefined), fulfilled/resolved(result is value), rejected(result is error  )

 let promise = new Promise((resolve, reject) => {
    console.log('Promise');
    // resolve(123);
 })
