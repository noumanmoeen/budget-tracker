import React from 'react';
import BudgetCard from '../components/BudgetCard';

function Budgets() {
  let arr = new Array(5);
  arr.fill(2, 0, 5);
  arr = arr.map((a, i) => i + 1);
  return (
    <div className='p-10'>
     <h1 className=' text-4xl tracking-tight font-extrabold text-text mb-10 '>
        Your Budgets
      </h1>
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6'>
      {arr.map((item) => (
        <BudgetCard key={item} budgetnumber={item} disabled={item === 1 }/>
      ))}
    </div>
    </div>
  );
}

export default Budgets;
