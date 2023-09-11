import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const BudgetCard = ({ budgetnumber, active, onClick }) => {
  const data02 = [
    { name: 'Expenses', value: 8000 },
    { name: 'Savings', value: 2000 },
  ];

  const disabled_data = [{ name: 'Expenses', value: 8000 }];

  const COLORS = ['#0088FE', '#FF8042'];

  const DISABLED_COLORS = ['#262c38', '#31343a'];

  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={active ? () => navigate('/budget') : () => {}}
        className={`flex flex-wrap lg:flex-nowrap justify-between  ${
          active ? 'bg-secondary' : 'bg-gray-500 opacity-70'
        } p-6 border rounded-md shadow-lg`}
      >
        <div>
          <h1 className=' text-2xl tracking-tight font-bold text-text'>
            Name : Budget {budgetnumber}
          </h1>
          <h3 className=' text-l tracking-tight font-bold text-text'>
            {active ? 'Amount : Rs.250k' : 'Amount : -'}
          </h3>
          <h3 className=' text-l tracking-tight font-bold text-text'>
            {active ? 'Current Savings : Rs.50k' : 'Current Savings : -'}
          </h3>
        </div>
        <ResponsiveContainer width={200} height={200}  >
          <PieChart          >
            <Pie
              dataKey='value'
              data={active ? data02 : disabled_data}
              outerRadius={80}
              fill='#171614'
              stroke='#F5F5F4'
            >
              {data02.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    active
                      ? COLORS[index % COLORS.length]
                      : DISABLED_COLORS[index % COLORS.length]
                  }
                />
              ))}
            </Pie>
            {active && <Tooltip />}
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default BudgetCard;
