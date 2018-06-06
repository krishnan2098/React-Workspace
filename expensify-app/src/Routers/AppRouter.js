import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashBoard from '../components/ExpenseDashBoard';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from  '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={ ExpenseDashBoard } exact={true} />
                <Route path='/create' component={ AddExpensePage } />
                <Route path='/edit/:id' component={ EditExpensePage } />
                <Route path='/help' component={ HelpPage } />
                <Route component={ NotFoundPage } />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;