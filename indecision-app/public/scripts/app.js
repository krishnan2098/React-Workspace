'use strict';

console.log('App.js is running');
// JSX - Javascript XML
var app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of the computer.'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Shankar',
    age: 19,
    location: 'Mumbai'
};
var userName = 'Shanky';
var userAge = 20;
var userLocation = 'Jaipur';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
