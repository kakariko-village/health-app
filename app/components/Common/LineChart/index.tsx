'use client'
import React, { useState, useEffect } from 'react'
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
import { ChartItem } from '@/interfaces'
export type Props = {
  labels: string[]
  datasets: Array<ChartItem>
}

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

export default function DataChart({ labels, datasets }: Props) {
  const [data, setData] = useState({
    labels,
    datasets,
  })

  useEffect(() => {
    setData({
      labels,
      datasets,
    })
  }, [labels, datasets])
  return <Line options={options} data={data} />
}
