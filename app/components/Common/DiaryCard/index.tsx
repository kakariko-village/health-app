'use client'
import { DiaryItem } from '@/interfaces'
import './styles.scss'
export type Props = {
  data: DiaryItem
}
export default function DiaryCard({ data }: Props) {
  return (
    <div
      className="diary-card-container transition duration-700 ease-in-out 
      border-4 text-dark-500 border-gray-400 hover:border-primary-300"
    >
      <a href="#">
        <div className="diary-card-container  p-4" key={data.id}>
          <h4 className="text-lg font-normal leading-none mb-[5px]">
            {data.date}
          </h4>
          <h4 className="text-lg font-normal leading-none mb-[10px]">
            {data.time}
          </h4>
          <h5 className="text-lg font-light text-xs">{data.title}</h5>
          <p className="diary-card-content text-lg font-light text-xs">
            {data.content}
          </p>
        </div>
      </a>
    </div>
  )
}
