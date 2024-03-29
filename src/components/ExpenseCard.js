import React from 'react';

//TODO
// REFACTORING OF THIS COMPONENT

const ExpenseCard = ({ id, paid, setExpenses, expenses }) => {
  return (
    <>
      {paid ? (
        <div
          className='flex flex-row p-6 justify-between bg-gray-500 opacity-70 mb-5 border rounded-md cursor-pointer'
          onClick={() => {
            setExpenses(
              expenses.map((expense) => {
                if (expense.id === id) {
                  return { ...expense, paid: !expense.paid };
                } else {
                  return expense;
                }
              })
            );
          }}
        >
          paid
        </div>
      ) : (
        <div
          className='flex flex-row p-6 justify-between bg-secondary mb-5 border rounded-md cursor-pointer'
          onClick={() => {
            setExpenses(
              expenses.map((expense) => {
                if (expense.id === id) {
                  return { ...expense, paid: !expense.paid };
                } else {
                  return expense;
                }
              })
            );
          }}
        >
          lorem
        </div>
      )}
    </>
  );
};

export default ExpenseCard;
