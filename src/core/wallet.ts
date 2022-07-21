import { humanReadablePrice } from './utils';

enum WALLET_STATUS  {
	EMPTY,
	FAIR,
	FULL,
	UNKNOWN,
};

interface Wallet  {
	total: number,
	status: WALLET_STATUS,
}

// Data
const wallet: Wallet = { total: 250, status: WALLET_STATUS.EMPTY }

// Calculations
const getAppropriateStatus = (total: number) => {
	if (total > 1000) return WALLET_STATUS.FULL;
	if (total > 200) return WALLET_STATUS.FAIR;
	if (total <= 200) return WALLET_STATUS.EMPTY;

	return WALLET_STATUS.UNKNOWN;
}

const getWalletTotal = () => wallet.total;

const getWalletStatus = () => wallet.status;

const addToWallet = (amount: number )=> {
	wallet.total += amount;

	wallet.status = getAppropriateStatus(wallet.total);
}

const removeFromWallet = (amount: number) => {
	wallet.total -= amount;

	wallet.status = getAppropriateStatus(wallet.total)
}

const clearWallet = () => {
	wallet.total = 0;

	wallet.status = WALLET_STATUS.EMPTY;
}

const humanReadableWallet = humanReadablePrice();

export {
	getWalletTotal,
	getWalletStatus,
	addToWallet,
	removeFromWallet,
	clearWallet,
	humanReadableWallet
}
