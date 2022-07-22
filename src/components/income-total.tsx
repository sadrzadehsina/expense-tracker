import { useState, useEffect } from "react";

import useIncome, { INCOME_STATUS } from "../store/income";
import { humanReadablePrice } from "../core/utils";

export default function IncomeTotal() {
	const total = useIncome((state) => state.income.total);
	const status = useIncome((state) => state.income.status);

	const humanReadableIncome = humanReadablePrice();

	return (
		<div style={{ textAlign: "center" }}>
			<h3>INCOME</h3>
			<h2
				style={{
					color: status === INCOME_STATUS.HIGH ? "green" : "red",
				}}
			>
				{humanReadableIncome(total)}
			</h2>
		</div>
	);
}
