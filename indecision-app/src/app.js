console.log("App.js is running");
//JSX - Javascript XML
var template = (
    <div>
        <h1 id='root'>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);