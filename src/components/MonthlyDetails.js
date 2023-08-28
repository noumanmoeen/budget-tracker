import React from 'react';
import CustomBarChart from './CustomBarChart';
import CustomDetailsCard from './CustomDetailsCard';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

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

const COLORS = ['#0088FE', '#FF8042'];

const expenseData = [
  {
    name: 'Food',
    expenses: 96172,
  },
  {
    name: 'My',
    expenses: 73864,
  },
  {
    name: 'Mother',
    expenses: 17754,
  },
  {
    name: 'Electricity',
    expenses: 1413,
  },
  {
    name: 'French',
    expenses: 81386,
  },
];


const data02 = [
  { name: 'Expenses', value: 8000 },
  { name: 'Savings', value: 2000 },
];

const MonthlyDetails = () => {
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
          <p className=' text-xl'>SAVING GOALS MET</p>
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
        label={'Savings by month'}
        width={'80%'}
        data={data}
      />
      <CustomBarChart
        xaxis={'name'}
        dataKey='expenses'
        label={'Expenses by month'}
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

export default MonthlyDetails;
