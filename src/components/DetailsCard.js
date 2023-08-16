import React from 'react';

const DetailsCard = ({ heading , content , subHeading , subcontent }) => {
  return (
    <div className='h-52 w-1/4 p-4  border rounded-md shadow-lg bg-secondary'>
        <p className='text-2xl text-text'>
            {heading || ''}
        </p>
        <p className='text-xl text-text' >
            {content || ''}
        </p>
        <p className='text-2xl text-text'>
            {subHeading || ''}
        </p>
        <p className='text-xl text-text'>
            {subcontent || ''}
        </p>
    </div>
  );
};

export default DetailsCard;
