"use strict";

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (str) {
  if (this.stomach.length === 10) {
    console.log(` Sovac chem`);
  }
  if (typeof str !== "string") {
    console.log(`${str} is not eatable`);
  } else {
    this.stomach.push(str);
  }
  return this.stomach;
};
Person.prototype.poop = function () {
  this.stomach.length = 0;
};
Person.prototype.toString = function () {
  return `${this.name} ${this.age}`;
};

const user1 = new Person("Karen", 29);
const user2 = new Person("Vazgen", 55);

// const baby = new Person("Lala", 4);
// baby.favoritToy = "dolly";
// baby.play = function () {
//   return `"Playing with ${this.favoritToy} being the favorite toy.`;
// };
// console.log(baby.play());

function Baby(fname, fage, favoritToy) {
  Person.call(this, fname, fage);
  this.favoritToy = favoritToy;
}
Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function () {
  return `"Playing with ${this.favoritToy} being the favorite toy.`;
};

const baby = new Baby("Lala", 4, "dolly");
console.log(baby.name);
console.log(baby.play());
baby.eat("mhn");
console.log(baby.stomach.length);
