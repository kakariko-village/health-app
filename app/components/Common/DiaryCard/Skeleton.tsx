'use client'
import './styles.scss'

export default function DiaryCardSkeleton() {
  return (
    <div className="diary-card-container border-4 text-dark-500 border-gray-400">
      <a href="#">
        <div className="diary-card-container  p-4">
          <h4 className="text-lg font-normal leading-none mb-[5px]">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[70px]" />
          </h4>
          <h4 className="text-lg font-normal leading-none mb-[10px]">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[50px]" />
          </h4>
          <h5 className="text-lg font-light text-xs mb-[5px]">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[100%]" />
          </h5>
          <p className="diary-card-content text-lg font-light text-xs mb-[5px]">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[100%]" />
          </p>
        </div>
      </a>
    </div>
  )
}
