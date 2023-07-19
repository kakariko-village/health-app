'use client'
import './styles.scss'

export default function ColumnCardSkeleton() {
  return (
    <div className="column-card-container text-dark-500">
      <div className="column-card-img relative mb-[10px] animate-pulse flex items-center justify-center bg-gray-300">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="column-card-content text-lg font-light text-xs text-[15px]">
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[100%] mb-[5px]" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[100%] mb-[5px]" />
      </div>
      <div className="column-card-tags flex">
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[50px] mb-[5px] mr-[10px]" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[50px] mb-[5px] mr-[10px]" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[50px] mb-[5px] mr-[10px]" />
      </div>
    </div>
  )
}
