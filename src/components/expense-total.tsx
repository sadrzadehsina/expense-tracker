import { useState, useEffect } from "react";

import useExpense from '../store/expense';

export default function ExpenseTotal() {

	const total = useExpense(state => state.expense.total);

	return (
		<>
			<h4>Expense</h4>
			<h4>total is: {total}</h4>
		</>
	);
}
