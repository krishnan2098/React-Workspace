let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility? 'Hide Details' : 'Show Details'}</button>
            { visibility && (
                <div>
                <p>Now it is visible</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();