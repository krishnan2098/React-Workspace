//
// Object Destructuring
//

// const Person = {
//     // name: 'Andrew',
//     age: 27,
//     location : {
//         city: 'Philadelphia',
//         temp: 88
//     }
// };
//
// const { name = 'Anonymous', age } = Person;
//
// console.log(`${ name } is ${ age }`);
//
// const { city, temp : temperature} = Person.location;
//
// if( city && temperature ) {
//     console.log(`It's ${ temperature } in ${ city }`);
// }
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const { name : publisherName = 'Self-Published' } = book.publisher;
//
// console.log( publisherName );

//
// Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${ city } ${ state }`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ itemName, , mediumPrice] = item;

console.log(`A medium ${ itemName } ${ mediumPrice }`);