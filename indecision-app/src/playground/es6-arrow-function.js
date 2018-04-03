// //assigning function to a variable
// const square = function (x) {
//     return x * x;
// };
// console.log("ES-5:", square(3));
//
// //named ES5 function
// function squareIt(x) {
//     return x * x;
// }
// console.log("ES-5-typical:", squareIt(4));
//
// const squareArrow = (x) => {
//     return x * x;
// };
// console.log("ES-6:", squareArrow(5));
//
// // if function has to return just one expression then we can use the following definition
// const squareArrowV2 = (x) => x * x;
// console.log("ES-6v2:", squareArrow(6));

//Challenge
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Andrew Mead'));

const getFirstNameByShortHand = (fullName) => fullName.split(' ')[0];
console.log(getFirstNameByShortHand('Jen Mead'));