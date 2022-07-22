import { humanReadablePrice } from './utils';

enum EXPENSE_STATUS {
	LOW,
	HIGH,
	UNKNOWN
}

type Expense = {
	total: number,
	status: EXPENSE_STATUS
};

const expense: Expense = { total: 0, status: EXPENSE_STATUS.LOW };

const getAppropriateStatus = (total: number) => {
	if (total > 500) return EXPENSE_STATUS.HIGH;
	if (total <= 500) return EXPENSE_STATUS.LOW;

	return EXPENSE_STATUS.UNKNOWN;
}

const getExpense = (): Expense => expense;

const addExpense = (total: number) => {
	expense.total += total;

	expense.status = getAppropriateStatus(expense.total);
}

const clearExpense = () => {
	expense.total = 0;

	expense.status = getAppropriateStatus(expense.total);
}

const humanReadableExpense = humanReadablePrice();

export {
	getExpense,
	addExpense,
	clearExpense,
	humanReadableExpense,
}

export type { Expense }
