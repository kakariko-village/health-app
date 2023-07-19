'use client'
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/MUI'
import { DiaryItem } from '@/interfaces'
import DiaryCard from '@/components/Common/DiaryCard'
import DiaryCardSkeleton from '@/components/Common/DiaryCard/Skeleton'
import { delayFetch } from '@/helpers'
import './styles.scss'

export type Props = {
  data: Array<DiaryItem>
  apiUrl: string
}
export default function MyDiary({ data, apiUrl }: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const [diaryData, setDiaryData] = useState(data)
  const [currentPage, setCurrentPage] = useState(1)
  const loadMorePage = async () => {
    const page = currentPage + 1
    setIsLoading(true)
    try {
      const res = (await delayFetch(
        `${apiUrl}/my-diary?_page=${page}&_limit=8`,
        {
          delay: 2000,
        }
      )) as Response
      setIsLoading(false)
      if (res) {
        const jsonData = await res.json()
        setDiaryData([...diaryData, ...jsonData])
        setCurrentPage(page)
      }
    } catch (e) {
      console.log(e)
    }
  }
  const renderGroupSkeleton = (count: number) => {
    let skeletons = []
    for (let i = 1; i <= count; i++) {
      skeletons.push(<DiaryCardSkeleton />)
    }
    return skeletons
  }
  useEffect(() => {
    setDiaryData(data)
  }, [data])
  return (
    <div id="my-diary" className="my-diary-container">
      <h2 className="uppercase text-[22px] text-dark-500 leading-none mb-[10px]">
        MY DIARY
      </h2>
      <div className="grid grid-cols-4 gap-4 mb-[32px]">
        {diaryData && diaryData.length > 0
          ? diaryData.map((item: DiaryItem, index: number) => (
              <DiaryCard data={item} key={item.id} />
            ))
          : ''}
        {isLoading ? renderGroupSkeleton(4) : ''}
      </div>
      <div className="text-center mb-[50px]">
        {isLoading ? (
          ''
        ) : (
          <Button
            className="transition duration-700 ease-in-out bg-gradient-to-b from-primary-400 to-primary-300 
            color-white text-lg font-normal min-w-[296px] hover:from-primary-300 hover:to-primary-400"
            onClick={() => loadMorePage()}
          >
            自分の日記をもっと見る
          </Button>
        )}
      </div>
    </div>
  )
}
