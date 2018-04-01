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
    age: 19
};

function getLocation(location){
    if(location){
        return location;
    } else {
        return 'Unknown';
    }
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
        {<h3>My h3 tag</h3>};
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);