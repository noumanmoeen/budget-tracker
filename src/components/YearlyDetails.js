import React from 'react';
import CustomBarChart from './CustomBarChart';
import CustomDetailsCard from './CustomDetailsCard';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

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

const data02 = [
  { name: 'Expenses', value: 8000 },
  { name: 'Savings', value: 2000 },
];

const COLORS = ['#0088FE', '#FF8042'];

export const expenseData = [
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
      <div className='flex flex-row  justify-around mb-8'>
        <CustomDetailsCard
          heading={'TOP EXPENSES'}
          data={expenseData}
          dataKey={'name'}
        />
        <CustomDetailsCard
          heading={'UPCOMING PAYMENTS'}
          data={expenseData}
          dataKey={'name'}
        />
        <div className='px-8 py-5 bg-primary border rounded-md shadow-lg'>
          <p className=' text-xl' >
            SAVING GOALS MET
          </p>
          <ResponsiveContainer width={200} height={200}>
            <PieChart className='flex flex-col items-start justify-start '>
              <Pie
                dataKey='value'
                data={data02}
                fill='#171614'
                stroke='#F5F5F4'
              >
                {data02.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <CustomBarChart
        xaxis={'name'}
        dataKey='savings'
        label={'Savings by Year'}
        width={'80%'}
        data={data}
      />
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
