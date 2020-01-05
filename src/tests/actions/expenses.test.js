import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup an expense edit', () => {
    const action = editExpense('123', {note: 'new note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {note: 'new note'}
    })
});

test('Should setup the add expense function with values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 1095.00,
        createdAt: 1000,
        note: 'Rent payment'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup the add expense with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        id: expect.any(String),
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    })
});