import React from 'react';
import { ResponsiveContainer, LineChart, XAxis, Line, YAxis, Tooltip } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const totalCount = useLoaderData()
    return (
        <div className="statistic">
        <h1>BUSINESS STATISTICS</h1>
        <div className="charts">
            <ResponsiveContainer width="95%" aspect={2}>
                <LineChart data={totalCount.data}>
                    <XAxis dataKey="name" interval={'preserveStartEnd'} />
                    <Line dataKey="total" />
                    <YAxis></YAxis>
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
        </div>
    );
};

export default Statistics;