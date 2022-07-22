import React from "react";
import { TextInput, Box, Button, Container, Center } from "@mantine/core";
import { useForm } from "@mantine/form";
import ExpenseTotal from "./components/expense-total";
import IncomeTotal from "./components/income-total";
import Wallet from "./components/wallet";
import Transactions from './components/transactions';

import { makeItem } from "./core/item";
import type { Item } from "./core/item";

import useIncome from "./store/income";
import useExpense from "./store/expense";
import useTransaction, { TRANSACTION_TYPE } from "./store/transaction";

interface FormItem {
	label: string;
	total: string;
}

function App() {
	const form = useForm({
		initialValues: {
			label: "",
			total: "",
		},
	});

	const addIncome = useIncome((state) => state.addIncome);
	const addExpense = useExpense((state) => state.addExpense);
	const addTransaction = useTransaction((state) => state.addTransaction);

	const submitTransaction = ({ label, total }: FormItem) => {
		const item = makeItem({ label, total: parseFloat(total) });

		addTransaction({
			...item,
			type: total.startsWith("-")
				? TRANSACTION_TYPE.EXPENSE
				: TRANSACTION_TYPE.INCOME,
		});
	};

	return (
		<Container size={400} px={10}>
			<Center>
				<h1>Expense Tracker</h1>
			</Center>

			<Wallet />
			<ExpenseTotal />
			<IncomeTotal />

			<h3>History</h3>
			<hr />
			<Transactions />

			<h3>Add new transaction</h3>
			<hr />

			<form onSubmit={form.onSubmit(submitTransaction)}>
				<TextInput
					required
					label="Label"
					placeholder="Enter text..."
					{...form.getInputProps("label")}
				/>
				<TextInput
					required
					label="Total"
					placeholder="Enter total..."
					{...form.getInputProps("total")}
				/>
				<Box mt="md">
					<Button type="submit" fullWidth>
						Add transaction
					</Button>
				</Box>
			</form>
		</Container>
	);
}

export default App;
