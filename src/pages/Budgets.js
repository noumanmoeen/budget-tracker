import React from 'react';
import BudgetCard from '../components/BudgetCard';
import BudgetAdd from '../components/BudgetAdd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserBudgets, getBudgets } from '../features/budgets/budgetSlice';

function Budgets() {
  const [isAddModalVisible, setIsAddModalVisible] = React.useState(false);
  const budgets = useSelector(getBudgets);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUserBudgets())
      .unwrap()
      .then((res) => {})
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    console.log('-----------', budgets);
  }, [budgets]);
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
          {budgets &&
            budgets.map(({ _id, title, active }) => (
              <BudgetCard key={_id} title={title} active={active} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Budgets;
