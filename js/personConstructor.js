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

console.log(user1.eat("asdasdasd"));

user1.poop();
console.log(user1.stomach.length);
console.log(user1.toString());
user1.eat(15);
user2.eat(11);
