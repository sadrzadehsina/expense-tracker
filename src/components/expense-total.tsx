import { useState, useEffect } from "react";

import useExpense from '../store/expense';

export default function ExpenseTotal() {

	const total = useExpense(state => state.expense.total);

	return (
		<>
			<h3>Expense</h3>
			<h2>{total}</h2>
		</>
	);
}
