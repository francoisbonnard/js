const car = {
    doors : 4,
    seats : "cuir",
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(material) {
        this.seats = material;    
    }
}

const  luxurycar = {};

Object.setPrototypeOf(luxurycar,car);
luxurycar.seatMaterial = "vison"

console.log(luxurycar.seatMaterial);
console.log(luxurycar.valueOf());

console.log(Object.keys(luxurycar));


Object.keys(luxurycar).forEach(key => {
    console.log(key);
});

console.log("for... in includes inherited props");
for (let key in luxurycar) {
    console.log(key);
}

//object constructors
function Animal(species) {
    this.species = species;
    this.eats=true;
}

Animal.prototype.walks = function () {
    return `A ${this.species} is walking`
}

const Bear = new Animal("Bear");
console.log(Bear.species);
console.log(Bear.walks());
console.log(Bear.__proto__);

//ES6 classes
class Vehicle {
    constructor () {
        this.wheels = 4,
        this.motorized=true
    }
    ready() {
        return "ready to go !"
    }
}

class Motorcycle extends Vehicle {
    constructor () {
        super ();
        this.wheels = 2;
    }
    wheely () {
        return "on the road agaun !"
    }
}

const myBike = new Motorcycle()
console.log(myBike.wheels);
console.log(myBike.ready());