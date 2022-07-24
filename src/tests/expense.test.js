import { renderHook, act } from "@testing-library/react-hooks";
import useExpense from "../store/expense";

test("should have an empty expense object", () => {
	const { result } = renderHook(() => useExpense());

	expect(result.current.expense).toBeDefined();
	expect(result.current.expense.total).toBe(0);
	expect(result.current.expense.status).toBe(0);
});

test("should add expense", () => {
	const { result } = renderHook(() => useExpense());

	act(() => {
		const expenseTotal = 500;
		result.current.addExpense(expenseTotal);
	});

	expect(result.current.expense.total).toBe(500);
});

test("should clear all expenses", () => {
	const { result } = renderHook(() => useExpense());

	act(() => {
		const expenseTotal = 500;
		result.current.addExpense(expenseTotal);
	});

	expect(result.current.expense.total).toBe(500);

	act(() => {
		result.current.clearExpense();
	});

	expect(result.current.expense.total).toBe(0);
});

test("should indicate correct state based on expense value", () => {
	const { result } = renderHook(() => useExpense());

	act(() => {
		const expenseTotalHighStatus = 1000;
		result.current.addExpense(expenseTotalHighStatus);
	});

	expect(result.current.expense.status).toBe(1);

	act(() => {
		result.current.clearExpense();
	});

	act(() => {
		const expenseTotalLowStatus = 100;
		result.current.addExpense(expenseTotalLowStatus);
	});

	expect(result.current.expense.status).toBe(0);
});
