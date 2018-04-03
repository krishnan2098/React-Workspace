console.log('App.js is running');
// JSX - Javascript XML
const app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of the computer.',
    options: ['One', 'Two']
};
const template =(
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options:" : "No Options"}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
);

const user = {
    name: 'Shankar',
    age: 19,
    location: 'Mumbai'
};

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }//by default else return undefined
}

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const setupReset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count - { count }</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={setupReset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();