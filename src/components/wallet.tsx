import { useState, useEffect } from "react";

import useWallet from '../store/wallet';

export default function Wallet() {

	const total = useWallet(state => state.wallet.total);

	return (
		<>
			<h3>Your Balance</h3>
			<h1>{total}</h1>
		</>
	);
}
