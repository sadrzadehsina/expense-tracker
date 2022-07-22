import create from "zustand";
import { produce } from "immer";

enum EXPENSE_STATUS {
	LOW,
	HIGH,
	UNKNOWN,
}

type Expense = {
	total: number;
	status: EXPENSE_STATUS;
};

interface ExpenseState {
	expense: Expense;
	getExpense: () => Expense;
	addExpense: (total: number) => void;
	clearExpense: () => void;
}

const getAppropriateStatus = (total: number) => {
	if (total > 500) return EXPENSE_STATUS.HIGH;
	if (total <= 500) return EXPENSE_STATUS.LOW;

	return EXPENSE_STATUS.UNKNOWN;
};

const useExpense = create<ExpenseState>()((set, get) => ({
	expense: { total: 0, status: EXPENSE_STATUS.LOW },

	getExpense: () => get().expense,

	addExpense: (total) => {
		set(
			produce((state) => {
				state.expense.total += Math.abs(total);

				state.expense.status = getAppropriateStatus(state.expense.total);
			})
		);
	},

	clearExpense: () => {
		set(
			produce((state) => {
				state.expense.total = 0;
				state.expense.status = EXPENSE_STATUS.LOW;
			})
		);
	},
}));

export default useExpense;
export { EXPENSE_STATUS }
