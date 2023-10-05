import React from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useDispatch } from 'react-redux';
import Datepicker from 'tailwind-datepicker-react';
import { addBudget, fetchUserBudgets } from '../features/budgets/budgetSlice';
import CustomModal from './CustomModal';

// TODO
// CHANGE STYLES FOR DATEPICKER

const BudgetAdd = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  const [addBudgetData, setAddBudgetData] = React.useState({
    title: '',
    monthlyBudget: 0,
    startDate: '',
    active: false,
  });

  const handleChange = (selectedDate) => {
    setAddBudgetData((pre) => ({ ...pre, startDate: selectedDate }));
  };
  const handleClose = (state) => {
    setShow(state);
  };

  const handleSave = async () => {
    dispatch(addBudget(addBudgetData))
      .unwrap()
      .then((res) => {
        dispatch(fetchUserBudgets());
      })
      .catch((err) => {
        console.log(err);
      });
    setShowModal(false);
  };

  return (
    <>
      <CustomModal
      onSave={handleSave}
      onClose={handleClose}
      title={"Add a budget"}
      showModal={show}
      >
        <form className='space-y-4 md:space-y-6' action='#'>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-text'
            >
              Title
            </label>
            <input
              type='text'
              value={addBudgetData.title}
              className='bg-gray-50 border border-gray-300 text-text sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5 dark:bg-primary  dark:placeholder-gray-400 dark:text-text  dark:focus:bg-primary'
              placeholder='-----'
              required
              onChange={(e) => {
                setAddBudgetData((pre) => ({
                  ...pre,
                  title: e.target.value,
                }));
              }}
            />
          </div>
          <div>
            <label
              htmlFor='password'
              value={''}
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-text'
            >
              Total Budget
            </label>
            <CurrencyInput
              id='input-example'
              name='input-name'
              className='bg-gray-50 border border-gray-300 text-text sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5 dark:bg-primary  dark:placeholder-gray-400 dark:text-text  dark:focus:bg-primary'
              placeholder='Please enter your initial budget'
              defaultValue={0}
              decimalsLimit={2}
              prefix='Rs.'
              onValueChange={(value, name) =>
                setAddBudgetData((pre) => ({
                  ...pre,
                  monthlyBudget: Number(value),
                }))
              }
            />
          </div>
          <div>
            <label
              htmlFor='password'
              value={''}
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-text'
            >
              Pick budget start date
            </label>
            <Datepicker
              options={{
                datepickerClassNames: 'bg-white',
              }}
              onChange={handleChange}
              show={show}
              setShow={handleClose}
            />
          </div>
          <button
            type='button'
            onClick={() =>
              setAddBudgetData((pre) => ({
                ...pre,
                active: !pre.active,
              }))
            }
            data-tooltip-target='tooltip-default'
            className={`flex w-full justify-center items-center  border text-primary text-base   ${
              addBudgetData.active ? 'border-text' : 'border-gray-300'
            } rounded-lg ${
              addBudgetData.active ? 'bg-text' : 'bg-gray-500'
            } bg-text shadow hover:shadow-lg py-4`}
          >
            Active
          </button>
        </form>
      </CustomModal>
    </>
  );
};

export default BudgetAdd;