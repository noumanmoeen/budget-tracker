import React from 'react';

const CustomDetailsCard = ({data , dataKey , heading}) => {
  return (
    <div className='px-8 py-5 bg-primary border rounded-md shadow-lg'>
      <p className='text-xl text-text font-bold'>{heading}</p>
      <ul>
        {data.map((expense, i) => (
          <li className={`flex flex-row mb-4 ${i === 0 ? 'mt-4' : ''} `}>
            <p className='mr-8 font-extrabold '> {`#${i + 1}`}</p>
            <p className=' text-base font-thin'>{expense[dataKey]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomDetailsCard;
