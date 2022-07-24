import actualCreate from "zustand";
import { act } from "react-dom/test-utils";

const storeResetFns = new Set();

const create = (createState) => {
	if (!createState) return create;
	const store = actualCreate(createState);
	const initialState = store.getState();
	storeResetFns.add(() => store.setState(initialState, true));
	return store;
};

afterEach(() => {
	act(() => storeResetFns.forEach((resetFn) => resetFn()));
});

export default create;
