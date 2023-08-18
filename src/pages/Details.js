import React from 'react';
import { DetailsTabs } from '../components/DetailsTabs';
import DetailsCard from '../components/DetailsCard';

function Details() {
  return (
    <div className='p-6'>
      <div className='flex justify-around '>
       {/* <DetailsCard heading={'Active Budget'} content={'1289898'} subcontent={'BUDGET 1'}/> */}
        <div  className='h-30 w-full py-5 px-7  border rounded-md shadow-lg bg-secondary mb-10'>
          <div className='flex justify-between  '>
            <div className='flex flex-col justify-end'>
            <p className='text-4xl' >
              Budget Details
            </p>
            </div>
           
            <div>
              <p>
                Active Budget
              </p>
              <p>
                Budget 1
              </p>
              <p>
                Active Budget
              </p>
              <p>
                Budget 1
              </p>
              <p>
                Active Budget
              </p>
              <p>
                Budget 1
              </p>
            </div>
          </div>
        </div>
        {/* <div  className=' h-52 w-1/4 p-4 border border-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        
        </div> */}
      </div>
      <DetailsTabs />
    </div>
  );
}

export default Details;
