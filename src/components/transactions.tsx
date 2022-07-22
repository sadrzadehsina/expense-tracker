import useTransaction from "../store/transaction";

export default function Transactions() {
	const transactions = useTransaction((state) => state.transactions);

	return (
		<div>
			{transactions.map((t) => (
				<>
					<h1>{t.label}</h1>
					<h2>{t.total}</h2>
				</>
			))}
		</div>
	);
}
