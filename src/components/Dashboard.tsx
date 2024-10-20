import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', leads: 4000, conversions: 2400 },
  { name: 'Feb', leads: 3000, conversions: 1398 },
  { name: 'Mar', leads: 2000, conversions: 9800 },
  { name: 'Apr', leads: 2780, conversions: 3908 },
  { name: 'May', leads: 1890, conversions: 4800 },
  { name: 'Jun', leads: 2390, conversions: 3800 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="mt-8 glass-effect p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Lead Generation Dashboard</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="leads" fill="#8884d8" />
          <Bar dataKey="conversions" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;