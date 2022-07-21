import type { Item } from './item';

type Transaction = Item & {
	type: 'plus' | 'minus'
}

const transactions: Transaction[] = [];

const getTransactions = (): Transaction[] => transactions;

const addTransaction = (item: Transaction) => {
	transactions.push(item);
}

export {
	getTransactions,
	addTransaction,
}

export type { Transaction };
