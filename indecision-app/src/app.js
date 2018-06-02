import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    )
};

ReactDOM.render((
        <Layout>
            <h1>Page title</h1>
            <p>this is my page</p>
        </Layout>
    ), document.getElementById('app'));