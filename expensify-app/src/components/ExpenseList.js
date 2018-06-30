import React from 'react';
import { connect } from 'react-redux';
import { EventListItem } from "./EventListItem";
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1> Expense List </h1>
        {
            props.expenses.map((expense) => {
                return <EventListItem {...expense} key={ expense.id }/>;
            })
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

// export default ConnectedExpenseList;