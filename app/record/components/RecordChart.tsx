'use client'
import React, { useState } from 'react'
import RecordBtn from '@/components/Common/RecordBtn'
import LineChart from '@/components/Common/LineChart'
import faker from 'faker'
import './styles.scss'
export default function RecordChart() {
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
  const datasets = [
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
  ]
  const renderExercises = (count: number) => {
    let data = []
    for (let i = 1; i <= count; i++) {
      data.push(
        <li className="border-b px-2 pb-2 mr-[50px]">
          <div className="flex justify-between">
            <div>
              <h4 className="text-[15px]">家事全般（立位・軽い）</h4>
              <p className="text-primary-300 text-[15px]">26kcal</p>
            </div>
            <div className="text-primary-300 text-lg">10 min</div>
          </div>
        </li>
      )
    }
    return data
  }
  const scrollToContent = (selector: string) => {
    const element = document.querySelector(selector)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }
  return (
    <div className="record-chart-container">
      <div className="grid grid-cols-3 gap-12 mb-[50px]">
        <RecordBtn
          title="BODY RECORD"
          img="./images/MyRecommend-1.jpg"
          btnText="自分のカラダの記録"
          callback={() => scrollToContent('#body-record')}
        />
        <RecordBtn
          title="MY EXERCISE"
          img="./images/MyRecommend-2.jpg"
          btnText="自分の運動の記録"
          callback={() => scrollToContent('#my-exercise')}
        />
        <RecordBtn
          title="MY DIARY"
          img="./images/MyRecommend-3.jpg"
          btnText="自分の日記"
          callback={() => scrollToContent('#my-diary')}
        />
      </div>
      <div id="body-record" className="chart-container bg-dark-500 mb-[50px]">
        <div className="chart-title flex w-[242px] text-white px-4 pt-6">
          <h2 className="text-[15px] font-normal pr-4 uppercase">
            BODY RECORD
          </h2>
          <div className="text-[22px] font-normal">2021.05.21</div>
        </div>
        <div className="h-[304px]">
          <LineChart labels={labels} datasets={datasets} />
        </div>
      </div>
      <div
        id="my-exercise"
        className="my-exercise-container bg-dark-500 mb-[50px]"
      >
        <div className="chart-title flex w-[242px] text-white px-4 py-6">
          <h2 className="text-[15px] font-normal pr-4 uppercase">
            MY EXERCISE
          </h2>
          <div className="text-[22px] font-normal">2021.05.21</div>
        </div>
        <div className="text-white pl-8 pr-4 pb-6">
          <ul className="my-exercise-list grid grid-cols-2 gap-4 list-disc h-[192px] overflow-y-auto pl-[15px]">
            {renderExercises(50)}
          </ul>
        </div>
      </div>
    </div>
  )
}
