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
var a = 23;
var b = a;
a = 46;
console.log(a); // 46
console.log(b); // 23

//objects
obj1 = {
  name: 'Nero',
  age: 26
};

var obj2 = obj1; // no new object was created here, only a reference to it
obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30

// functions
var age = 27;
var obj = {
  name: 'messi',
  city: 'Barcelona'
};

function change(a, b) {
  (a = 30), (b.city = 'Manchester');
}

change(age, obj);

console.log(age); // 27
console.log(obj.city); // Manchester
