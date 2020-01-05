import React from 'react';
import ReactDOM from 'react-dom';
import { Provider,  } from 'react-redux';
import '../node_modules/normalize.css';
import './styles/styles.scss'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({
    amount: 1000,
    description: 'Gas bill',
    createdAt: 20200
}));

store.dispatch(addExpense({
    amount: 500,
    description: 'Water bill',
    createdAt: -200
}));

store.dispatch(addExpense({
    amount: 30000,
    description: 'Hubspot bill',
    createdAt: 2030
}));

const state = store.getState();
console.log(getExpenses(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));