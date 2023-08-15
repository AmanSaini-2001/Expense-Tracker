import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Book Shelf (Wooden)',
    amount: 5000,
    date: new Date(2021, 6, 12),
  }
];

function App() {
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => { 
      return [expense,...prevExpenses]; 
    });
    // console.log('From app.js');
    // console.log(expense);
  };
  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses expenses={expenses} />
    </div>
    
  );
}

export default App;
