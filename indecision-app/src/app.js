console.log('App.js is running');
// JSX - Javascript XML
var app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of the computer.'
};
var template =(
<div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
);

var user = {
    name: 'Shankar',
    age: 19,
    location: 'Mumbai'
};
var userName = 'Shanky';
var userAge = 20;
var userLocation = 'Jaipur';
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);