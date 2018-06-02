import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.content}
            <p>footer</p>
        </div>
    )
};

const template = (
    <div>
        <h1>Page title</h1>
        <p>this is my page</p>
    </div>
);

ReactDOM.render(<Layout content = {template} />, document.getElementById('app'));