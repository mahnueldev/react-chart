import React, { useState, useEffect } from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['John', 'Kevin', 'Geroge', 'Micheal', 'Oreo'],
      datasets: [
        {
          label: "Whom'st let the dogs out",
          data: [62, 55, 34, 120, 720],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.4)',
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: "Whom'st let the dogs out",
        },
      },
    });
  }, []);
  return <Bar options={chartOptions} data={chartData} />;
};

export default BarChart;
