import { LineChart, Line, XAxis, YAxis } from "recharts";
const data = [
  { nb_it: 10, cost: 120 },
  { nb_it: 20, cost: 110 },
  { nb_it: 30, cost: 90 },
  { nb_it: 40, cost: 83 },
  { nb_it: 50, cost: 75 },
  { nb_it: 60, cost: 120 },
  { nb_it: 70, cost: 110 },
  { nb_it: 80, cost: 90 },
  { nb_it: 90, cost: 83 },
  { nb_it: 100, cost: 75 },
];

const renderLineChart = (
  <LineChart width={1400} height={450} data={data}>
    <Line type="monotone" dataKey="cost" stroke="#00b4d8" />
    <XAxis dataKey="nb_it" />
    <YAxis />
  </LineChart>
);

function Graph() {
  return (
    <div className="px-5 py-10 rounded-xl mt-20 flex justify-center items-center w-fit h-fit">
      {renderLineChart}
    </div>
  );
}

export default Graph;
