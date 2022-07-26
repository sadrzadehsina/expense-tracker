import { useState, useEffect } from "react";
import { Title } from '@mantine/core';

import useIncome, { INCOME_STATUS } from "../store/income";
import { humanReadablePrice } from "../core/utils";

export default function IncomeTotal() {
	const total = useIncome((state) => state.income.total);
	const status = useIncome((state) => state.income.status);

	const humanReadableIncome = humanReadablePrice();

	return (
		<div style={{ textAlign: "center" }}>
			<Title order={3}>INCOME</Title>
			<Title order={2} style={{ color: "green" }}>{humanReadableIncome(total)}</Title>
		</div>
	);
}
