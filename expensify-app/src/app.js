import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import '../node_modules/normalize.css/normalize.css'
import './styles/styles.scss';

const ExpenseDashBoard = () => (
    <div>
        This is the DashBoard Component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is the Add Expense Component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is the Edit Expense Component
    </div>
);

const HelpPage = () => (
    <div>
        This is the Help Component
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path='/' component={ ExpenseDashBoard } exact={true} />
            <Route path='/create' component={ AddExpensePage } />
            <Route path='/edit' component={ EditExpensePage } />
            <Route path='/help' component={ HelpPage } />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));