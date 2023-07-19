'use client'
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import faker from 'faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
ChartJS.defaults.color = '#FFF'
ChartJS.defaults.borderColor = '#FFF'
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  borderColor: 'FFFFFF',
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: '',
    },
  },
}

const labels = [
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
]

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: '#8FE9D0',
      backgroundColor: '#8FE9D0',
    },
    {
      label: '',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: '#FFCC21',
      backgroundColor: '#FFCC21',
    },
  ],
}

export default function DataChart() {
  return <Line options={options} data={data} />
}
