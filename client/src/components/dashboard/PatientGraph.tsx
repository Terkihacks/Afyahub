import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Mon', patients: 40, appointments: 24 },
  { name: 'Tue', patients: 30, appointments: 13 },
  { name: 'Wed', patients: 20, appointments: 38 },
  { name: 'Thu', patients: 27, appointments: 39 },
  { name: 'Fri', patients: 18, appointments: 48 },
  { name: 'Sat', patients: 23, appointments: 38 },
  { name: 'Sun', patients: 34, appointments: 43 },
];

export function PatientGraph() {
  return (
    <div className="w-full h-[400px] bg-white rounded-xl shadow-sm p-4 dark:bg-gray-800">
      <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
        Weekly Patient Traffic
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="patients"
            stroke="#00AB55"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="appointments"
            stroke="#0162FF"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}