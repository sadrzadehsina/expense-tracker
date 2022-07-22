import useTransaction from "../store/transaction";

export default function Transactions() {
	const transactions = useTransaction((state) => state.transactions);

	const getTransactions = useTransaction((state) => state.getTransactions);

	return (
		<div>
			{getTransactions().map((t) => (
				<>
					<h1>{t.label}</h1>
					<h2>{t.total}</h2>
				</>
			))}
		</div>
	);
}
