import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routers/AppRouter';

// Redux Store import
import configureStore from './store/configureStore';

//Redux action generators import
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";

//Redux Selectors import
import getVisibleExpenses from './selectors/expenses';

import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill' }));
store.dispatch(addExpense({ description: 'Gas Bill' }));
store.dispatch(setTextFilter('water'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
console.log(visibleExpenses);

// console.log(store.getState());

ReactDOM.render(<AppRouter/>, document.getElementById('app'));