// import './utils.js'
// import subtract, { square, add } from './utils.js'
// console.log('this app,js file inside src directory!');
// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 50));

// import isSenior, { isAdult, canDrink } from "./person.js";
// console.log('Adult?', isAdult(100));
// console.log('Drink?', canDrink(100));
// console.log('Senior Citizen?', isSenior(1000));

// import validator from 'validator';
// console.log(validator.isEmail('test@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'Testing 123');
ReactDOM.render( template, document.getElementById('app'));