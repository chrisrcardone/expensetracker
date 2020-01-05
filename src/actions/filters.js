export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
})

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

export const setStartDate = (date) => ({
    type: 'SET_START',
    date
})

export const setEndDate = (date) => ({
    type: 'SET_END',
    date
})