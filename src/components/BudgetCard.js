import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

const BudgetCard = ({ budgetnumber, active , onClick }) => {
  const data02 = [
    { name: 'Expenses', value: 8000 },
    { name: 'Savings', value: 2000 },
  ];

  const disabled_data =   [{ name: 'Expenses', value: 8000 }]

  const COLORS = ['#0088FE', '#FF8042'];

  const DISABLED_COLORS = ['#262c38' , '#31343a']

  const navigate = useNavigate()
  return (
    <>
      <div
      onClick={active ? () => navigate('/budget') : () => {} }
        className={`flex flex-row justify-between  ${
          active ? 'bg-secondary' : 'bg-gray-500 opacity-70'
        } p-8 border rounded-md shadow-lg`}
      >
        <div>
          <h1 className=' text-2xl tracking-tight font-bold text-text'>
            Name : Budget {budgetnumber}
          </h1>
          <h3 className=' text-l tracking-tight font-bold text-text' >{ active ? 'Amount : Rs.250k' : 'Amount : -'}</h3>
          <h3  className=' text-l tracking-tight font-bold text-text'>{active ? 'Current Savings : Rs.50k' : 'Current Savings : -'}</h3>
        </div>
        <PieChart
          className='flex flex-col items-start justify-start -mt-6  -ml-20'
          width={200}
          height={200}
        >
          <Pie
            dataKey='value'
            data={active ? data02 : disabled_data}
            innerRadius={40}
            outerRadius={80}
            fill='#171614'
            stroke='#F5F5F4'
          >
            {data02.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={ active ? COLORS[index % COLORS.length] : DISABLED_COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {active && <Tooltip />}
        </PieChart>
      </div>
    </>
  );
};

export default BudgetCard;
