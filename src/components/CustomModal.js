import React from 'react';

const CustomModal = ({ title, onSave, onClose, showModal, children }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className='bg-modalBg justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none '>
            <div className='relative w-full my-6 mx-auto '>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-1/3 mx-auto bg-secondary outline-none focus:outline-none'>
                <div className='flex items-start justify-between p-5 rounded-t'>
                  <h3 className='text-xl leading-tight tracking-tight  text-text font-semibold'>
                    {title}
                  </h3>
                </div>
                <div className='relative p-6 flex-auto'>{children}</div>
                <div className='flex items-center justify-end p-6 rounded-b'>
                  <button
                    className='text-white bg-cancel background-transparent font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={onClose}
                  >
                    Close
                  </button>
                  <button
                    className='bg-text text-white active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={onSave}
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

export default CustomModal;
