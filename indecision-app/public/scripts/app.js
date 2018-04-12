'use strict';

console.log('App.js is running');
// JSX - Javascript XML
var app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of the computer.',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    // Here e refers to the event
    e.preventDefault();

    var option = e.target.elements.options.value;
    // console.log(e.target.elements.options);

    if (option) {
        app.options.push(option);
        e.target.elements.options.value = '';
    }
    renderForm();
};

var removeAllElements = function removeAllElements() {
    app.options = [];
    renderForm();
};

var onMakeDecision = function onMakeDecision() {
    var randNum = Math.floor(Math.random() * app.options.length);
    alert(app.options[randNum]);
};

var appRoot = document.getElementById('app');

var renderForm = function renderForm() {
    //create render function that renders the new jsx
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? "Here are your options:" : "No Options"
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'button',
            { onClick: removeAllElements },
            'Remove All'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'options' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};
//initialise it by calling it
renderForm();
