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
