// console.log('check it')

// const person = {
//     age: 18,
//     location: {
//         city: 'Boston',
//         temp: 43.2
//     }
// };

// const {name = 'Anonymous', age, location} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {

// console.log(`Your city (${city}) is currently ${temperature}º outside.`)

// };

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Something',
//     publisher: {
//         date: '10/20/2020'
//     }
// }

// const { name: publisherName = 'Self Published' } = book.publisher;

// console.log(publisherName);

// Array Destructering

const address = [
    '1299 S. Juniper',
    'Boston, MA',
    '02766'
]

const [street, city = 'Unknown City or State', zip] = address;

// say you didn't care about some items, we could use the following to forget about street const [, city] = address;

console.log(`You are in ${city} at ${street}`)