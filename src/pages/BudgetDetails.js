import React from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import ExpenseCard from "../components/ExpenseCard";

const BudgetDetails = () => {
  let arr = new Array(5);
  arr.fill(2, 0, 5);
  arr = arr.map((a, i) => i + 1);
  const data02 = [
    { name: "Expenses", value: 8000 },
    { name: "Savings", value: 2000 },
  ];

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <div className="p-10">
      <div className="flex flex-row justify-between">
        <div className="w-full">
          <h1 className=" text-4xl tracking-tight font-extrabold text-text mb-10 ">
            Budget name
          </h1>
          <h1 className=" text-2xl tracking-tight font-bold text-text  mb-5">
            Amount : 250k
          </h1>
          <h1 className=" text-2xl tracking-tight font-bold text-text  mb-5">
            Used : 200k
          </h1>
          <h1 className=" text-2xl tracking-tight font-bold text-text  mb-5">
            Savings : 50k
          </h1>
          {arr.map((item) => (
        <ExpenseCard  key={item} budgetnumber={item} active={item === 1 }/>
      ))}
        </div>

        <PieChart
          className="flex flex-col items-start justify-start -mt-10 -mr-12 "
          width={500}
          height={500}
        >
          <Pie
            dataKey="value"
            data={data02}
            innerRadius={100}
            outerRadius={200}
            fill="#171614"
            stroke="#F5F5F4"
          >
            {data02.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {<Tooltip />}
        </PieChart>
      </div>
    </div>
  );
};

export default BudgetDetails;
