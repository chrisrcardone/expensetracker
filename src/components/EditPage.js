import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';


const EditExpensePage = (props) => {
    console.log(props)
    return (
    <div>
        <h1>Edit Expense</h1>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push('/');
              }}
        />
        <button onClick={(props) => {
            props.dispatch(removeExpense(props.expense.id));
            props.history.push('/');
        }}>Remove Expense</button>
    </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);