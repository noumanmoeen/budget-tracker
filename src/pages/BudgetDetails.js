import React from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import ExpenseCard from "../components/ExpenseCard";

let sample_data = [
  {
    id: 1,
    paid: true,
  },
  {
    id: 2,
    paid: false,
  },
  {
    id: 3,
    paid: false,
  },
  {
    id: 4,
    paid: false,
  },
  {
    id: 5,
    paid: false,
  },
  {
    id: 6,
    paid: false,
  },
];

const BudgetDetails = () => {
  // let arr = new Array(5);
  // arr.fill(2, 0, 5);
  // arr = arr.map((a, i) => i + 1);

  const [expenses, setExpenses] = React.useState(sample_data);
  const [isEditEnabled, setIsEditEnabled] = React.useState(false);

  const data02 = [
    { name: "Expenses", value: 80 },
    { name: "Savings", value: 20 },
  ];

  const COLORS = ["#0088FE", "#FF8042"];

  // NOTE
  // Add buttons for confirmation and cancellation
  return (
    <div className="p-10">
      <div className="flex flex-row justify-between">
        <div className="w-full">
          <div className="flex flex-row justify-between">
            <h1 className=" text-4xl tracking-tight font-extrabold text-text mb-10 ">
              Budget name
            </h1>
            <button
              type="button"
              onClick={() => setIsEditEnabled(!isEditEnabled)}
              className="text-text bg-secondary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-secondary"
            >
              <svg
                className="w-4 h-4 text-text dark:text-text mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
              </svg>
              Edit
            </button>
          </div>
          {isEditEnabled ? (
            <input
              placeholder="Amount : 250k"
              className=" bg-transparent text-2xl tracking-tight font-bold text-text  mb-5 dark:focus:ring-transparent"
            />
          ) : (
            <h1 className=" text-2xl tracking-tight font-bold text-text  mb-5">
              Amount : 250k
            </h1>
          )}
          {isEditEnabled ? (
            <input
              placeholder="Used : 200k"
              className=" bg-transparent text-2xl tracking-tight font-bold text-text  mb-5 dark:focus:ring-transparent"
            />
          ) : (
            <h1 className=" text-2xl tracking-tight font-bold text-text  mb-5">
              Used : 200k
            </h1>
          )}
          {isEditEnabled ? (
            <input placeholder=" Savings : 50k" className="bg-transparent text-2xl tracking-tight font-bold text-text  mb-5 dark:focus:ring-transparent"/>
           ) : (
            <h1 className=" text-2xl tracking-tight font-bold text-text  mb-5">
              Savings : 50k
            </h1>
          )}
          {expenses.map(({ id, paid }) => (
            <div key={id}>
              <ExpenseCard
                paid={paid}
                id={id}
                expenses={expenses}
                setExpenses={setExpenses}
              />
            </div>
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
