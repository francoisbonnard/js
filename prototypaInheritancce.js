// prototypal inheritance and prototype chain
const person = {
    alive : true
}

const musician = {
    plays : true
}


// the old way
musician.__proto__=person;

console.log(musician.alive);

//console.log(musician)

const artist = {
    painter : true
}

Object.setPrototypeOf(artist,person)

console.log(Object.getPrototypeOf(artist));
console.log(artist.__proto__);
console.log(artist.alive);

const guitarist = {
    strings :7,
    __proto__ : musician
}

console.log(guitarist.plays);
console.log(guitarist.alive);
console.log(guitarist.strings);
console.log(guitarist);
