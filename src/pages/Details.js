import React from 'react';
import { DetailsTabs } from '../components/DetailsTabs';

function Details() {
  return (
    <div className='p-6'>
      <div className='flex justify-around '>
        <div className='h-30 w-full py-5 px-7  border rounded-md shadow-lg bg-secondary mb-10'>
          <div className='flex justify-between  '>
            <div className='flex flex-col justify-end'>
              <p className='text-4xl'>Budget Details</p>
            </div>

            {/* <div className=''> */}
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3'>
              <p>Budget Name</p>
              <p>Budget 1</p>
              <p>Budget ID</p>
              <p>123</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3'>
              <p>Account Number</p>
              <p>1234</p>
              <p>User Bank</p>
              <p>Meezan Bank</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3'>
              <p>Saving Goals</p>
              <p>Rs 2000</p>
            </div>
          </div>
        </div>
     
      </div>
      <DetailsTabs />
    </div>
  );
}

export default Details;
