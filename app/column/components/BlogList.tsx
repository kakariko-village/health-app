'use client'
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/MUI'
import { ColumnItem } from '@/interfaces'
import ColumnCard from '@/components/Common/ColumnCard'
import ColumnCardSkeleton from '@/components/Common/ColumnCard/Skeleton'
import { delayFetch } from '@/helpers'

export type Props = {
  data: Array<ColumnItem>
  apiUrl: string
}
export default function BlogList({ data, apiUrl }: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const [columnData, setColumnData] = useState(data)
  const [currentPage, setCurrentPage] = useState(1)
  const loadMorePage = async () => {
    const page = currentPage + 1
    setIsLoading(true)
    //  Delay API response by 2 seconds to see the skeleton loading
    try {
      const res = (await delayFetch(
        `${apiUrl}/columns?_page=${page}&_limit=8`,
        {
          delay: 2000,
        }
      )) as Response
      setIsLoading(false)
      if (res) {
        const jsonData = await res.json()
        setColumnData([...columnData, ...jsonData])
        setCurrentPage(page)
      }
    } catch (e) {
      console.log(e)
    }
  }
  //  Delay API response by 2 seconds to see the skeleton loading
  const renderGroupSkeleton = (count: number) => {
    const skeletons = []
    for (let i = 1; i <= count; i++) {
      skeletons.push(<ColumnCardSkeleton />)
    }
    return skeletons
  }
  useEffect(() => {
    setColumnData(data)
  }, [data])
  return (
    <div className="column-container">
      <div className="grid grid-cols-4 gap-4 mb-[32px]">
        {columnData && columnData.length > 0
          ? columnData.map((item: ColumnItem, index: number) => (
              <ColumnCard
                data={item}
                key={item.id}
                className="fadeIn animated-2"
              />
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
            コラムをもっと見る
          </Button>
        )}
      </div>
    </div>
  )
}
