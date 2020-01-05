import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/CreatePage';
import EditExpensePage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/404Page';

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header/>
        <Switch>
            <Route exact={true} path="/" component={ExpenseDashboardPage} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />

            <Route component={NotFound} />
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;