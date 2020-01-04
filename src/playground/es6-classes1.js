class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age
    } /// You do not put a comma
    getGreeting() {
        return `Hi, ${this.name}! Welcome back.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        // The defaults are already set if we call the parent (person) contructor which pulls in the defaults and defines this.name and this.age
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            return `${description} Studying, ${this.major}`;
        } else {
            return description;
        }
    }
}

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        if (this.homeLocation) {
            return `Hi. I am ${this.name}. I am visiting from ${this.homeLocation}.`
        } else {
            return `Hi. I am ${this.name}.`
        }
    }
}

const me = new Traveler('Chris Cardone', 18, 'Boston, MA');

console.log(me.getGreeting());

const other = new Traveler('Chris Cardone', 18);
console.log(other.getGreeting())