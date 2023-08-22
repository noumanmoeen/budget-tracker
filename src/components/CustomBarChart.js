import React from 'react';
import {
  Bar,
  BarChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const CustomBarChart = ({ data , xaxis , interval = 0 , label , height = 400 , width , dataKey  }) => {
  return (
    <div className='flex flex-col justify-center items-center mb-9' >
        <p className='text-2xl text-text mb-9'> 
            {label}
        </p>
      <ResponsiveContainer height={height} width={width}  >
        <BarChart data={data}>
          <XAxis dataKey={xaxis} interval={interval} />
          <YAxis />
          <Tooltip />
          <ReferenceLine y={0} stroke='#000' />
          <Bar dataKey={dataKey} fill='#6D9886' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
