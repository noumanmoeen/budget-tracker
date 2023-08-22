import React from 'react';
import CustomBarChart from './CustomBarChart';

const data = [
  {
    name: '2022',
    savings: 500000,
    expenses: 203000,
  },
  {
    name: '2023',
    savings: 600000,
    expenses: 303000,
  },
];

const expenseData = [
  {
    name: 'Food',
    expenses: 961720,
  },
  {
    name: 'My',
    expenses: 738640,
  },
  {
    name: 'Mother',
    expenses: 177540,
  },
  {
    name: 'Electricity',
    expenses: 14130,
  },
  {
    name: 'French',
    expenses: 813860,
  },
];
const YearlyDetails = () => {
  return (
    <div className='py-9'>
      <div>
        <CustomBarChart
          xaxis={'name'}
          dataKey='savings'
          label={'Savings by Year'}
          width={'80%'}
          data={data}
        />
      </div>
      <CustomBarChart
        xaxis={'name'}
        dataKey='expenses'
        label={'Expenses by Year'}
        width={'80%'}
        data={data}
      />
      <CustomBarChart
        xaxis={'name'}
        dataKey='expenses'
        label={'Expenses by Category'}
        width={'80%'}
        data={expenseData}
      />
    </div>
  );
};

export default YearlyDetails;
