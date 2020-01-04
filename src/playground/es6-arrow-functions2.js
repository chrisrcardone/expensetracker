// arguments object - no longer bound with arrow functions

// this keyword is no longer bound with arrow functions

const add = (a,b) => a+b;

console.log(add(55,1))

// this keyword

const user = {
    name: 'Andrew',
    cities: ['Boston', 'New York', 'Norton'],
    printPlacesLived() {

        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived());

// challenge

const multiplier = {
    number: [4,5,6,7,8,9,10],
    multiplyBy: 2,
    multiply() {
        return this.number.map((number) => this.multiplyBy * number);
    }
}

console.log(multiplier.multiply());