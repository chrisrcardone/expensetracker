import React from 'react';
import { removeExpense } from '../actions/expenses';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default ExpenseListItem;