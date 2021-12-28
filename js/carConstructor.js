"use strict";

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.gazOil = 0;
  this.speedometr = 0;
}

Car.prototype.fill = function (gallons) {
  this.gazOil += gallons;
};

Car.prototype.drive = function (distance) {
  const canDriveDistance = this.gazOil * this.milesPerGallon;
  if (canDriveDistance === 0) {
    return "I cant drive, as I am out of fuel";
  }
  this.speedometr += distance <= canDriveDistance ? distance : canDriveDistance; //speedometr  600
  this.gazOil -=
    distance <= canDriveDistance
      ? this.gazOil - Math.round(distance / this.milesPerGallon)
      : this.gazOil; // gazOil
  return `I ran out of fuel at ${this.gazOil * this.milesPerGallon} miles `;
};

let camry = new Car("Camry", 15);

camry.fill(100);

console.log(camry.drive(1000));
console.log(`Speedometr :: ${camry.speedometr} miles`);
console.log(`GazOil :: ${camry.gazOil} gallon`);

console.log(camry.drive(2000));
console.log(`Speedometr :: ${camry.speedometr} miles`);
console.log(`GazOil :: ${camry.gazOil} gallon`);
