import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 200 },
  { name: "May", sales: 700 },
];

function BarChartBox() {
  return (
    <div style={{ width: "100%", height: 300, background: "white" }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="sales" fill="blue" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartBox;