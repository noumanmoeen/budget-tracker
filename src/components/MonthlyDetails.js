import React from 'react';
import CustomBarChart from './CustomBarChart';

const data = [
  {
    name: 'Jan',
    savings: -26147,
    expenses: 96172,
  },
  {
    name: 'Feb',
    savings: -41125,
    expenses: 73864,
  },
  {
    name: 'Mar',
    savings: 46422,
    expenses: 17754,
  },
  {
    name: 'Apr',
    savings: 834,
    expenses: 1413,
  },
  {
    name: 'May',
    savings: 16,
    expenses: 81386,
  },
  {
    name: 'Jun',
    savings: 2028,
    expenses: 22912,
  },
  {
    name: 'Jul',
    savings: 47629,
    expenses: 54201,
  },
  {
    name: 'Aug',
    savings: -4791,
    expenses: 77190,
  },
  {
    name: 'Sep',
    savings: 22660,
    expenses: 28482,
  },
  {
    name: 'Oct',
    savings: 19528,
    expenses: 10857,
  },
  {
    name: 'Nov',
    savings: 17996,
    expenses: 12059,
  },
  {
    name: 'Dec',
    savings: -33548,
    expenses: 39870,
  },
];
const MonthlyDetails = () => {
  return (
    <div className='py-9'>
      <div>
        <CustomBarChart
          xaxis={'name'}
          dataKey='savings'
          label={'Savings by month'}
          width={'80%'}
          data={data}
        />
      </div>
      <CustomBarChart
        xaxis={'name'}
        dataKey='expenses'
        label={'Expenses by month'}
        width={'80%'}
        data={data}
      />
    </div>
  );
};

export default MonthlyDetails;
