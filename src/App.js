import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import ExpenseItem from './components/ExpenseItem';

// Add code to import the other components here under
import { AppProvider } from './context/AppContext';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                            <div className='col-sm'>
						<Budget />
					</div>
                        }        

                        {
                            /* Add Remaining component here*/
				<div className='col-sm'>
						<RemainingBudget />
					</div>
                        }        

                        {
                            /* Add ExpenseTotal component here */
				<div className='col-sm'>
						<ExpenseTotal />
					</div>
                        }        
                       <h3 className='mt-3'>Expenses</h3>
                        {
                            /* Add ExpenseList component here */
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
                        }         

                        {
				<h3 className='mt-3'>Add Expense</h3>
                            /* Add ExpenseItem component here */
                        }        

                        {
                            /* Add AllocationForm component here under */
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
