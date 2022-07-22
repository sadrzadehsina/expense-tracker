import { useState, useEffect } from "react";

import useWallet from '../store/wallet';
import { humanReadablePrice } from '../core/utils';

export default function Wallet() {

	const total = useWallet(state => state.wallet.total);

	const humanReadableWallet = humanReadablePrice();

	return (
		<>
			<h3>Your Balance</h3>
			<h1>{humanReadableWallet(total)}</h1>
		</>
	);
}
