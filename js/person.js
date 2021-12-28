"use strict";

function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);
Person.prototype.compareAge = function (person) {
  if (person.age > this.age) {
    return `${person.name} is older than me.`;
  } else if (person.age < this.age) {
    return `${person.name} is younger than me`;
  } else {
    return `${person.name} is the same age as me`;
  }
};
console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));
