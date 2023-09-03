import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useCovidData } from '../../store/api/covidApi';

const CovidLineGraph = () => {
  const { data, isLoading, isError } = useCovidData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const chartData = [
    { date: 'Active Cases', cases: data.active },
    { date: 'Recovered Cases', cases: data.recovered },
    { date: 'Total Cases', cases: data.cases },
    { date: 'Total Deaths', cases: data.deaths },
    { date: 'Today Cases', cases: data.todayCases },
    { date: 'Today Deaths', cases: data.todayDeaths },
  ];

  return (
    <div className="w-full mx-auto mt-8 mb-4" style={{ maxWidth: '100%' }}>
      <h2 className="text-xl font-bold mb-4">Covid-19 Cases Fluctuation</h2>
      <div style={{ width: '100%', height: '300px' }}>
        <LineChart width={400} height={300} data={chartData}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cases" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </div>
  );
};

export default CovidLineGraph;
