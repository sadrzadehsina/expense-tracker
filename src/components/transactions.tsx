import { Card, Grid } from "@mantine/core";
import useTransaction, { TRANSACTION_TYPE } from "../store/transaction";

import { humanReadablePrice } from "../core/utils";

export default function Transactions() {
	const transactions = useTransaction((state) => state.transactions);

	const getTransactions = useTransaction((state) => state.getTransactions);

	const humanReadableTotal = humanReadablePrice();

	return (
		<div>
			{getTransactions().map((t) => (
				<Card
					shadow="sm"
					p="lg"
					mb="lg"
					style={{
						borderRight: `5px solid ${
							t.type === TRANSACTION_TYPE.INCOME ? "green" : "red"
						}`,
					}}
				>
					<Grid>
						<Grid.Col span={9}>
							<div>{t.label}</div>
						</Grid.Col>
						<Grid.Col span={3}>
							<div style={{ textAlign: 'right' }}>{humanReadableTotal(t.total)}</div>
						</Grid.Col>
					</Grid>
				</Card>
			))}
		</div>
	);
}
