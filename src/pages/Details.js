import React from 'react';
import { DetailsTabs } from '../components/DetailsTabs';
import DetailsCard from '../components/DetailsCard';

function Details() {
  return (
    <div className='p-6'>
      <div className='flex justify-around '>
       <DetailsCard heading={'Active Budget'} content={'1289898'} subcontent={'BUDGET 1'}/>
        <div  className='h-52 w-1/4 p-4 border rounded-sm border-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
         
        </div>
        <div  className=' h-52 w-1/4 p-4 border border-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        
        </div>
      </div>
      Details
      <DetailsTabs />
    </div>
  );
}

export default Details;
