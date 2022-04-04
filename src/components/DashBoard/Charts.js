import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useCharts from '../hook/useCharts';
import './Charts.css';

const Charts = () => {
    const [chartsData, setChartsData] = useCharts();
    return (
        <section className='charts-container'>
            <div className='chart-row'>
                <div className='chart-column'>
                    <h1>Month wise sell</h1>
                    <LineChart width={500} height={400} data={chartsData}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
                <div className='chart-column'>
                    <h1>investment VS revenue</h1>
                    <AreaChart width={500} height={400} data={chartsData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
            </div>
            <div className='chart-row'>

                <div className='chart-column'>
                    <h1>investment VS revenue</h1>
                    <BarChart width={500} height={250} data={chartsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="revenue" fill="#8884d8" />
                        <Bar dataKey="investment" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div className='chart-column'>
                    <h1>investment VS revenue</h1>
                    <PieChart width={730} height={250}>
                        <Pie data={chartsData} dataKey="revenue" nameKey="investment" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                        <Pie data={chartsData} dataKey="revenue" nameKey="investment" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    </PieChart>
                </div>
            </div>
        </section>
    );
};

export default Charts;