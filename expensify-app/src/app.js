import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import '../node_modules/normalize.css/normalize.css'
import './styles/styles.scss';



const routes = (
    <BrowserRouter>
        <Route path='/' component={} />
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));