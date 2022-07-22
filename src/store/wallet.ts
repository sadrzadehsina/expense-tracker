import create from "zustand";
import { produce } from "immer";

enum WALLET_STATUS {
	EMPTY,
	FAIR,
	FULL,
	UNKNOWN,
}

interface Wallet {
	total: number;
	status: WALLET_STATUS;
}

interface WalletState {
	wallet: Wallet;
	getWalletTotal: () => number;
	getWalletStatus: () => WALLET_STATUS;
	addToWallet: (amount: number) => void;
	removeFromWallet: (amount: number) => void;
	clearWallet: () => void;
}

const getAppropriateStatus = (total: number) => {
	if (total > 1000) return WALLET_STATUS.FULL;
	if (total > 200) return WALLET_STATUS.FAIR;
	if (total <= 200) return WALLET_STATUS.EMPTY;

	return WALLET_STATUS.UNKNOWN;
};

const useWallet = create<WalletState>()((set, get) => ({
	wallet: { total: 0, status: WALLET_STATUS.EMPTY },

	getWalletTotal: () => get().wallet.total,

	getWalletStatus: () => get().wallet.status,

	addToWallet: (amount) => {
		set(
			produce((state) => {
				state.wallet.total += amount;
				state.wallet.status = getAppropriateStatus(state.wallet.total);
			})
		);
	},

	removeFromWallet: (amount) => {
		set(
			produce((state) => {
				state.wallet.total -= Math.abs(amount);
				state.wallet.status = getAppropriateStatus(state.wallet.total);
			})
		);
	},

	clearWallet: () => {
		set(
			produce((state) => {
				state.wallet.total = 0;
				state.wallet.status = WALLET_STATUS.EMPTY;
			})
		);
	},
}));

export default useWallet;
