import React from 'react';
import { Text, Center, Space} from '@mantine/core';
import ExpenseTotal from './components/expense-total';
import IncomeTotal from './components/income-total';
import Wallet from './components/wallet';

function App() {
  return (
			<>
			<h1>Expense Tracker</h1>
			<Space h="md" />
			
			<Wallet />
			<ExpenseTotal />
			<IncomeTotal />
			</>
 );
}

export default App;
