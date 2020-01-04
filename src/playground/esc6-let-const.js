// Var will let you redefine and reassign, which is dangerous

var nameVar = 'Chris Cardone';
var nameVar = 'Christopher Cardone';
console.log('nameVar', nameVar)

// Let will allow you to redefine, however, it will crash if reassigned

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// Const cannot change, the value is set ONCE.

const nameConst = 'Frank'
console.log('nameConst', nameConst)

// All are scoped, so if we use them in a function, they're specific to that function and are not global variables.

function getName() {
    // the variable "name" can only be accessed inside this function script
    var name = 'Chris'
    return name
}

console.log(getName())

// Block scoping example

var name = 'Chris Cardone'

if (name) {
    var firstName = name.split(' ')[0]
    console.log(firstName)
}