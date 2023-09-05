import React from 'react';

const BudgetAdd = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-secondary outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 rounded-t'>
                  <h3 className='text-xl leading-tight tracking-tight  text-text font-semibold'>
                    Add a budget
                  </h3>
                </div>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
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
                        value={''}
                        className='bg-gray-50 border border-gray-300 text-text sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary  dark:placeholder-gray-400 dark:text-text  dark:focus:bg-primary'
                        placeholder='-----'
                        required
                        onChange={(e) => {}}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='password'
                        value={''}
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-text'
                        onChange={() => {}}
                      >
                        Password
                      </label>
                      <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='••••••••'
                        className='bg-gray-50 border border-gray-300 text-text sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary  dark:placeholder-gray-400 dark:text-text  dark:focus:bg-primary'
                        required=''
                      />
                    </div>
                    <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
</div>
                  </form>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 rounded-b'>
                  <button
                    className='text-white bg-cancel background-transparent font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className='bg-text text-white active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
};

export default BudgetAdd;


// !title || !monthlyBudget || !startDate || !active