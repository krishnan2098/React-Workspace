var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

// var variableName can be reassigned anywhere. Its dangerous!!!

let nameLet = 'Jen';
// let nameLet = 'Julie'; --> Wont work. Duplicating variable cannot be done when you use let.
//let is better in the aspect that the variable can be changed locally but it cant be globally be changed

console.log('nameLet', nameLet);

const nameConst = 'Frank';
// nameConst = 'FDR'; Constants cant be changed within the programs either

console.log('nameConst', nameConst);

//block scoping
var fullName = 'Andrew mead';
let firstName;
//let and const are block level scoped. that is they cannot be accessed outside code block in which they are defined

if (fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
