import React from 'react';
import BudgetCard from '../components/BudgetCard';
import BudgetAdd from '../components/BudgetAdd';
import { useDispatch } from 'react-redux';
import { fetchUserBudgets } from '../features/budgets/budgetSlice';

function Budgets() {
  const [isAddModalVisible, setIsAddModalVisible] = React.useState(false);
  const dispatch = useDispatch();
  let arr = new Array(5);
  arr.fill(2, 0, 5);
  arr = arr.map((a, i) => i + 1);

  React.useEffect(() => {
    dispatch(fetchUserBudgets())
  }, [])
  
  return (
    <>
      <BudgetAdd
        showModal={isAddModalVisible}
        setShowModal={setIsAddModalVisible}
      />
      <div className='p-6'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row justify-center items-center'>
            <h1 className=' text-4xl tracking-tight font-extrabold text-text mb-10'>
              Your Budgets
            </h1>
          </div>
          <button
            type='button'
            className='text-text bg-secondary hover:bg-secondary-900 font-semibold rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-secondary'
            onClick={() => {
              setIsAddModalVisible(!isAddModalVisible);
            }}
          >
            Create Budget
          </button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6'>
          {arr.map((item) => (
            <BudgetCard key={item} budgetnumber={item} active={item === 1} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Budgets;
