console.log('App.js is running');
// JSX - Javascript XML
const app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of the computer.',
    options: []
};

const onFormSubmit = (e) => {// Here e refers to the event
    e.preventDefault();

    const option = e.target.elements.options.value;
    // console.log(e.target.elements.options);

    if(option){
        app.options.push(option);
        e.target.elements.options.value = '';
    }
    renderForm();
};

const removeAllElements = () => {
    app.options = [];
    renderForm();
};

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random()*app.options.length);
    alert(app.options[randNum]);
};

const appRoot = document.getElementById('app');

const renderForm = () => {
    //create render function that renders the new jsx
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options:" : "No Options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <ol>
                {
                    app.options.map(option => <li key={option}>{option}</li>)
                }
            </ol>
            <button onClick={removeAllElements}>Remove All</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="options"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};
//initialise it by calling it
renderForm();
