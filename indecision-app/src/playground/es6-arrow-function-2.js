// const add = function(a,b) {
//     console.log(arguments);
//     return a + b;
// };
//
// const addArrFn = (a, b) => {
//     // console.log(arguments);
//     return a + b;
// };
// console.log(add(55, 1, 1001));
// console.log(addArrFn(100, 1));

const user = {
    name: "Andrew Mead",
    city: ["Philadelphia", "Dublin", "New York"],
    printPlacesLived(){
        return this.city.map(city => this.name + ' has lived in ' + city);
        // this.city.forEach( city => console.log(this.name + " has lived in " + city));
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map(number => this.multiplyBy * number);
    }
};
console.log(multiplier.multiply());