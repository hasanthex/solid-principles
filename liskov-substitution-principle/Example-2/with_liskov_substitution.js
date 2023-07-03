class Vehicle {
  constructor(name, wheel){
    this.name = name;
    this.wheel = wheel;
  }

  getName(){
    return this.name;
  }

  numberOfwheel(){
    return this.wheel;
  }

  getDetails(){
    return `Name# ${this.name}, Wheel# ${this.wheel}`;
  }
}

class EngineVehicle extends Vehicle {
  constructor(name, wheel, engine){
    super(name, wheel);
    this.engine = engine;
  }

  getDetails(){
    return `Name# ${this.name}, Wheel# ${this.wheel}, Engine# ${this.engine}`;
  }
}

class MotorCycle extends EngineVehicle {
  constructor(name, wheel, engine){
    super(name, wheel, engine);
  }
}

class Car extends EngineVehicle {
  constructor(name, wheel, engine){
    super(name, wheel, engine);
  }
}

class BiCycle extends Vehicle {
  constructor(name, wheel){
    super(name, wheel);
  }
}

const car = new Car("Toyota", 4,  "2000 Cc");
const motorcycle = new MotorCycle("Honda", 2, "160 Cc");

console.log(car.getDetails());         // Name# Toyota, Wheel# 4, Engine# 2000 Cc
console.log(motorcycle.getDetails());  // Name# Honda, Wheel# 2, Engine# 160 Cc

const bicycle = new BiCycle("Phoenix", 2);
console.log(bicycle.getDetails());    // Name# Phoenix, Wheel# 2
