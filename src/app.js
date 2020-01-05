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

const jsx = (
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));