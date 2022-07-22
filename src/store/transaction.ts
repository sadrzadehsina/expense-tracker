import create from "zustand";
import { produce } from "immer";

import type { Item } from "../core/item";

enum TRANSACTION_TYPE {
	EXPENSE,
	INCOME,
}

type Transaction = Item & {
	type: TRANSACTION_TYPE;
};

interface TransactionState {
	transactions: Transaction[];
	getTransactions: () => Transaction[];
	addTransaction: (item: Transaction) => void;
}

const useTransaction = create<TransactionState>()((set, get) => ({
	transactions: [],

	getTransactions: () => get().transactions,

	addTransaction: (item) => {
		set(
			produce((state) => {
				state.transactions.push(item);
			})
		);
	},
}));

export default useTransaction;
export { TRANSACTION_TYPE }
