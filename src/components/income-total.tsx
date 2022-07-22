import { useState, useEffect } from "react";

import useIncome from '../store/income';

export default function IncomeTotal() {

	const total = useIncome(state => state.income.total);

	return (
		<>
			<h3>Income</h3>
			<h2>{total}</h2>
		</>
	);
}
