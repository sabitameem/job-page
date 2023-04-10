import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    { name: 'A1', value: 55 },
    { name: 'A2', value: 57 },
    { name: 'A3', value: 59 },
    { name: 'A4', value: 60 },
    { name: 'A5', value: 60 },
    { name: 'A6', value: 47 },
    { name: 'A7', value: 43 }
  ];

const Statistics = () => {

    return (
        <div className='w-[300px] h-[150px] lg:w-[600px] lg:h-[300px] mx-auto mt-5 mb-14'>
            <h2 className='text-xl text-purple-400 lg:text-2xl font-bold mb-3'>My Assignment Marks :</h2>
           <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            width={800} height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer> 
        </div>
    );
};

export default Statistics;