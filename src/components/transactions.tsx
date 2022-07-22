import useTransaction from "../store/transaction";

import { humanReadablePrice } from '../core/utils';

export default function Transactions() {
	const transactions = useTransaction((state) => state.transactions);

	const getTransactions = useTransaction((state) => state.getTransactions);

	const humanReadableTotal = humanReadablePrice();

	return (
		<div>
			{getTransactions().map((t) => (
				<>
					<h1>{t.label}</h1>
					<h2>{humanReadableTotal(t.total)}</h2>
				</>
			))}
		</div>
	);
}
