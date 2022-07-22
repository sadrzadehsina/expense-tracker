import { useState, useEffect } from "react";

import useExpense, { EXPENSE_STATUS } from "../store/expense";

import { humanReadablePrice } from "../core/utils";

export default function ExpenseTotal() {
	const total = useExpense((state) => state.expense.total);
	const status = useExpense((state) => state.expense.status);

	const humanReadableExpense = humanReadablePrice();

	return (
		<div style={{ textAlign: "center" }}>
			<h3>EXPENSE</h3>
			<h2 style={{ color: "red" }}>{humanReadableExpense(total)}</h2>
		</div>
	);
}
