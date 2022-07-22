import { useState, useEffect } from "react";

import useWallet from '../store/wallet';

export default function Wallet() {

	const total = useWallet(state => state.wallet.total);

	return (
		<>
			<h4>Income</h4>
			<h4>total is: {total}</h4>
		</>
	);
}
