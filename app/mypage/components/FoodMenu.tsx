'use client'
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/MUI'
import MenuCard from '@/components/Common/MenuCard'
import MenuCardSkeleton from '@/components/Common/MenuCard/Skeleton'
import { delayFetch } from '@/helpers'
import './styles.scss'
interface MenuItem {
  name: string
  img: string
  type: string
}
export type Props = {
  menu: Array<MenuItem>
  apiUrl: string
}
export default function FoodMenu({ menu, apiUrl }: Props) {
  const [menuData, setMenuData] = useState(menu)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentFilter, setCurrentFilter] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isFilterLoading, setIsFilterLoading] = useState(false)

  // Handle Filter Data
  const filterMenu = async (val: string) => {
    if (val === currentFilter) {
      // If user already chose one filter then click to the same filter button again, remove that filter and load page 1 data without filter
      setCurrentFilter('')
      setCurrentPage(1)
      setIsFilterLoading(true)
      try {
        const res = (await delayFetch(`${apiUrl}/menu-list?_page=1&_limit=8`, {
          delay: 2000,
        })) as Response
        setIsFilterLoading(false)
        if (res) {
          const jsonData = await res.json()
          setMenuData(jsonData)
        }
      } catch (e) {
        console.log(e)
      }
    } else {
      try {
        // Apply filter
        setIsFilterLoading(true)
        //  Delay API response by 2 seconds to see the skeleton loading
        const res = (await delayFetch(
          `${apiUrl}/menu-list?_page=1&_limit=8&type=${val}`,
          {
            delay: 2000,
          }
        )) as Response
        setIsFilterLoading(false)
        if (res) {
          const jsonData = await res.json()
          setMenuData(jsonData)
          setCurrentFilter(val)
          setCurrentPage(1)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
  // Handle load more content
  const loadMorePage = async () => {
    const page = currentPage + 1
    setIsLoading(true)
    setIsFilterLoading(false)
    try {
      //  Delay API response by 2 seconds to see the skeleton loading
      const res =
        currentFilter && currentFilter !== ''
          ? ((await delayFetch(
              `${apiUrl}/menu-list?_page=${page}&_limit=8&type=${currentFilter}`,
              {
                delay: 2000,
              }
            )) as Response)
          : ((await delayFetch(`${apiUrl}/menu-list?_page=${page}&_limit=8`, {
              delay: 2000,
            })) as Response)
      setIsLoading(false)
      if (res) {
        const jsonData = await res.json()
        setMenuData([...menuData, ...jsonData])
        setCurrentPage(page)
      }
    } catch (e) {
      console.log(e)
    }
  }
  // Display Skeleton Loading
  const renderGroupSkeleton = (count: number) => {
    const skeletons = []
    for (let i = 1; i <= count; i++) {
      skeletons.push(<MenuCardSkeleton />)
    }
    return skeletons
  }

  useEffect(() => {
    setMenuData(menu)
  }, [menu])
  return (
    <div className="food-menu-container">
      <div className="food-menu-filter-container flex justify-center mb-[20px]">
        <div className="slideInUp animated-2">
          <img
            className={`cursor-pointer mr-[50px] ${
              isFilterLoading ? 'pointer-events-none' : ''
            }`}
            src="./images/morning-btn.png"
            alt="Morning"
            width={136}
            height={136}
            onClick={() => filterMenu('morning')}
          />
        </div>
        <div className="slideInDown animated-2">
          <img
            className={`cursor-pointer mr-[50px] ${
              isFilterLoading ? 'pointer-events-none' : ''
            }`}
            src="./images/lunch-btn.png"
            alt="Lunch"
            width={136}
            height={136}
            onClick={() => filterMenu('lunch')}
          />
        </div>
        <div className="slideInUp animated-2">
          <img
            className={`cursor-pointer mr-[50px] ${
              isFilterLoading ? 'pointer-events-none' : ''
            }`}
            src="./images/dinner-btn.png"
            alt="Dinner"
            width={136}
            height={136}
            onClick={() => filterMenu('dinner')}
          />
        </div>
        <div className="slideInDown animated-2">
          <img
            className={`cursor-pointer  ${
              isFilterLoading ? 'pointer-events-none' : ''
            }`}
            src="./images/snack-btn.png"
            alt="Snack"
            width={136}
            height={136}
            onClick={() => filterMenu('snack')}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-[32px]">
        {/* Skeleton for filter: display on top of the list */}
        {isFilterLoading ? renderGroupSkeleton(8) : ''}
        {!isFilterLoading && menuData && menuData.length > 0
          ? menuData.map((item: MenuItem) => (
              <MenuCard
                key={item.name}
                name={item.name}
                img={item.img}
                className="fadeIn animated-2"
              />
            ))
          : ''}
        {/* Skeleton for load more content: display on bottom of the list */}
        {isLoading ? renderGroupSkeleton(4) : ''}
      </div>
      <div className="text-center mb-[50px]">
        {isFilterLoading || isLoading ? (
          ''
        ) : (
          <Button
            className="transition duration-700 ease-in-out bg-gradient-to-b from-primary-400 to-primary-300 
            color-white text-lg font-normal min-w-[296px] hover:from-primary-300 hover:to-primary-400"
            onClick={() => loadMorePage()}
          >
            記録をもっと見る
          </Button>
        )}
      </div>
    </div>
  )
}
