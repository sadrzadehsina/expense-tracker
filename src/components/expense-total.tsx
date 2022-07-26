import { useState, useEffect } from "react";
import { Title } from '@mantine/core';

import useExpense, { EXPENSE_STATUS } from "../store/expense";

import { humanReadablePrice } from "../core/utils";

export default function ExpenseTotal() {
	const total = useExpense((state) => state.expense.total);
	const status = useExpense((state) => state.expense.status);

	const humanReadableExpense = humanReadablePrice();

	return (
		<div style={{ textAlign: "center" }}>
			<Title order={3}>EXPENSE</Title>
			<Title order={2} style={{ color: "red" }}>{humanReadableExpense(total)}</Title>
		</div>
	);
}
