import { useState, useEffect } from "react";

import useIncome from '../store/income';

export default function IncomeTotal() {

	const total = useIncome(state => state.income.total);

	return (
		<>
			<h4>Income</h4>
			<h4>total is: {total}</h4>
		</>
	);
}
