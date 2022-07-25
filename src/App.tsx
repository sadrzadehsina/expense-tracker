import React from "react";
import {
	Card,
	Grid,
	TextInput,
	Box,
	Button,
	Container,
	Center,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import ExpenseTotal from "./components/expense-total";
import IncomeTotal from "./components/income-total";
import Wallet from "./components/wallet";
import Transactions from "./components/transactions";
import TransactionForm from "./components/transaction-form";

import { makeItem } from "./core/item";
import type { Item } from "./core/item";

import useWallet from "./store/wallet";
import useIncome from "./store/income";
import useExpense from "./store/expense";
import useTransaction, { TRANSACTION_TYPE } from "./store/transaction";

interface FormItem {
	label: string;
	total: string;
}

function App() {
	const addToWallet = useWallet((state) => state.addToWallet);
	const removeFromWallet = useWallet((state) => state.removeFromWallet);
	const addIncome = useIncome((state) => state.addIncome);
	const addExpense = useExpense((state) => state.addExpense);
	const addTransaction = useTransaction((state) => state.addTransaction);

	const submitTransaction = ({ label, total }: FormItem) => {
		const item = makeItem({ label, total: parseFloat(total) });

		const isExpense = total.startsWith("-");

		if (isExpense) {
			addExpense(item.total);
			removeFromWallet(item.total);
		} else {
			addIncome(item.total);
			addToWallet(item.total);
		}

		addTransaction({
			...item,
			type: isExpense ? TRANSACTION_TYPE.EXPENSE : TRANSACTION_TYPE.INCOME,
		});

	};

	return (
		<Container size={400} px={10}>
			<Center>
				<h1>Expense Tracker</h1>
			</Center>

			<Wallet />

			<Card shadow="sm" p="xs">
				<Grid>
					<Grid.Col span={6}>
						<IncomeTotal />
					</Grid.Col>
					<Grid.Col span={6}>
						<ExpenseTotal />
					</Grid.Col>
				</Grid>
			</Card>

			<h3>History ( last 3 )</h3>
			<hr />
			<Transactions />

			<h3>Add new transaction</h3>
			<hr />
			<TransactionForm onSubmit={submitTransaction} />
		</Container>
	);
}

export default App;
