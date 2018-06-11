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

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name : publisherName = 'Self-Published' } = book.publisher;

console.log( publisherName );