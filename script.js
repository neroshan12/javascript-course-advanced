// Function constructor
/*
var nero = {
  name: 'Nero',
  yearOfBirth: 1991,
  job: 'student'
}; // Object literal

var Person = function(name, yearOfBirth, job) {
  // function constructor with capital P
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  // attaching methods to the constructor functions prototype property
  console.log(2017 - this.yearOfBirth);
};

Person.prototype.lastName = 'Siva';

var Nero = new Person('Nero', 1991, 'student'); // instantiation
// new creates empty object, function is called
// new Person(... is assigned to the object Nero
Nero.calculateAge();

var Neymar = new Person('Neymar', 1992, 'footballer');
var Messi = new Person('Messi', 1987, 'footballer');

Neymar.calculateAge();
Messi.calculateAge();

console.log(Nero.lastName);
console.log(Neymar.lastName);
console.log(Messi.lastName);
*/

// Object.create
/*
var personProto = {
  calculateAge: function() {
    conosle.log(2017 - this.yearOfBirth);
  }
};

var nero = Object.create(personProto);

nero.name = 'Nero';
nero.yearOfBirth = 1991;
nero.job = 'student';

var neymar = Object.create(personProto, {
  name: { value: 'Neymar' },
  yearOfBirth: { value: 1992 },
  job: { value: 'footballer' }
});
*/

// Primitives vs Objects

// Primitives = numbers, strings, booleans, undefinded and null
// everything else = Object

// variables containing primitives hold that data inside the variable itself
// objects: variables assosciated with objects do not actually contain the object but a reference to a place in memory where that object is stored

// primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a); // 46
// console.log(b); // 23
//
// //objects
// obj1 = {
//   name: 'Nero',
//   age: 26
// };
//
// var obj2 = obj1; // no new object was created here, only a reference to it
// obj1.age = 30;
// console.log(obj1.age); // 30
// console.log(obj2.age); // 30
//
// // functions
// var age = 27;
// var obj = {
//   name: 'messi',
//   city: 'Barcelona'
// };
//
// function change(a, b) {
//   // when you pass a primitive into the function a copy is created and will not affect the variable 'a' on the outside because it is a primitive
//   (a = 30), console.log(a); // it will not affect the variable outside of the function
//   ((b.city = 'Manchester')); // not really passing the object above line but the reference to the object
// }
//
// change(age, obj);
//
// console.log(age); // 27
// console.log(obj.city); // Manchester

// Passing functions as arguments
// var years = [1991, 1992, 1958, 2001];
//
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }
//
// function calculateAge(element) {
//   return 2017 - element;
// }
//
// function isDrinkingAge(element) {
//   return element >= 18;
// }
//
// function maxHeartRate(element) {
//   if (element >= 18 && element <= 81) {
//     return Math.round(206.9 - 0.67 * element);
//   } else {
//     return -1;
//   }
// }
// var ages = arrayCalc(years, calculateAge);
//
// var isDrinkingAges = arrayCalc(ages, isDrinkingAge);
// var rates = arrayCalc(ages, maxHeartRate);
//
// console.log(ages);
// console.log(rates);

// Functions returning Functions
//
// function interviewQuestion(job) {
//   // functions are always first class functions in javascript
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + ', can you please explain what UX design is?');
//     };
//   } else if (job === 'teacher') {
//     return function(name) {
//       console.log('What subject do you teach ' + name + '?');
//     };
//   } else {
//     return function(name) {
//       console.log('Hello, ' + name + ', what do you do?');
//     };
//   }
// }
//
// var teacherQuestion = interviewQuestion('teacher'); // function in the functuon interviewQuestion is being assigned to teacherQuestion
// var designerQuestion = interviewQuestion('designer');
//
// teacherQuestion('John');
// designerQuestion('Cristiano');
// designerQuestion('Neymar');
// designerQuestion('Messi');
// designerQuestion('Beckham');
//
// interviewQuestion('teacher')('Mark'); // another way to do it, read from left to right, left bit is called first and then function(name) called with 'Mark'

//

// IIFE

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();
//
// (function() {
//   // wrapped in () to trick parser into thinking it is an expression not a declaration
//   var score = Math.random() * 10; // whats inside () cannot be a statement. JS will treat as expression
//   console.log(score >= 5); // created data privacy as you cannot access score variable from outside
// })(); // have to evoke it to call it
//
// // function () { // javascript parser will think that this is a function declaration
// //
// // }
//
// (function(goodLuck) { // just want to create scope that is hidden from outside scope and safely put variables
//   var score = Math.random() * 10; // create data privacy and do not interfere with other variables in global execution context
//   console.log(score >= 5 - goodLuck); // not to create reusable code
// })(5);

// Closures
// function retirement(retirementAge) {
//   var a = ' years left until retirement.'; // variable 'a' is declared
//   return function(yearOfBirth) {
//     // function is returned
//     var age = 2017 - yearOfBirth;
//     console.log(retirementAge - age + a); // retirement age parameter used from outside of function and a variable declared outside and yet works when it is run. Can use those variables even after retirement function that declares the variables stops its execution
//   }; //  funciton finishes and execution context is popped off the stack
// }
//
// var retirementUS = retirement(66); // call retirement function anfd passed value of 66
//
// // retirement(66)(1991);
//
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);
//
// retirementGermany(1991);
// retirementUS(1991);
// retirementIceland(1990);

// function interviewQuestion(job) {
//   return function(name) {
//     if (job === 'designer') {
//       console.log(name + ', can you please explain what UX design is?');
//     } else if (job === 'teacher') {
//       console.log('What subject do you teach, ' + name + '?');
//     } else {
//       console.log('Hello ' + name + ', what do you do?');
//     }
//   };
// }
//
// interviewQuestion('teacher')('Nero');
