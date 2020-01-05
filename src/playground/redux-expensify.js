import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


///Actions

const addExpense = ({ description = '', note = '', amount = 0, createdAt= 0 } = {}) => ({
     type: 'ADD_EXPENSE',
     expense: {
         id: uuid(),
         description,
         note,
         amount,
         createdAt
     }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (date) => ({
    type: 'SET_START',
    date
})

const setEndDate = (date) => ({
    type: 'SET_END',
    date
})


// Expenses Reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE' : 
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => {
                return id !== action.expense.id
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                    ...expense,
                    ...action.updates
                    };
                }
                else {
                    return expense;
                }
            });
        default: return state;
    };
};

// Filters Reducer

const filtersReducerDefaultState = {
    text: '', 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT': 
        return {
            ...state,
            text: action.text
        };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START':
            return {
                ...state,
                startDate: action.date
            };
        case 'SET_END':
            return {
                ...state,
                endDate: action.date
            };
        default: return state;
    };
};

const getExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) || expense.note.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
};

// Store Creation

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
    description: 'Hubspot',
    note: 'Final Payment to Hubspot',
    amount: 3000,
    createdAt: 150
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'Coffee',
    note: 'Weekly Coffee Load',
    amount: 30000,
    createdAt: 5000
}));

store.dispatch(sortByAmount());


// store.dispatch(removeExpense({
//     id: expenseOne.expense.id
// }));

store.dispatch(editExpense(expenseTwo.expense.id, { note: 'Coffee Update' }))

store.dispatch(setTextFilter('Hubspot'));

// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));

store.dispatch(setEndDate(215));


const demoState = {
    expenses: [
        {
        id: '1203492',
        description: 'Hubspot',
        note: 'Hubspot Final Payment',
        amount: 3000,
        createdAt: 0 
        }
    ],
    filters: {
        text: 'Hubspot',
        sortBy: 'date', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};