// Filtering expenses and returning visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    const compareFunction = (a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1: -1; //latest event on top
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1: -1;
        }
    };

    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort(compareFunction);
};
