import create from "zustand";
import { produce } from "immer";

enum INCOME_STATUS {
	LOW,
	HIGH,
	UNKNOWN,
}

type Income = {
	total: number;
	status: INCOME_STATUS;
};

interface IncomeState {
	income: Income;
	getIncome: () => Income;
	addIncome: (total: number) => void;
	clearIncome: () => void;
}

const getAppropriateStatus = (total: number) => {
	if (total > 500) return INCOME_STATUS.HIGH;
	if (total <= 500) return INCOME_STATUS.LOW;

	return INCOME_STATUS.UNKNOWN;
};

const useIncome = create<IncomeState>()((set, get) => ({
	income: { total: 0, status: INCOME_STATUS.LOW },

	getIncome: () => get().income,

	addIncome: (total) => {
		set(
			produce((state) => {
				state.income.total += total;

				state.income.status = getAppropriateStatus(state.income.total);
			})
		);
	},

	clearIncome: () => {
		set(
			produce((state) => {
				state.income.total = 0;
				state.income.status = INCOME_STATUS.LOW;
			})
		);
	},
}));

export default useIncome;
export { INCOME_STATUS }
