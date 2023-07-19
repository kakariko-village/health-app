'use client'
import { ColumnItem } from '@/interfaces'
import './styles.scss'
export type Props = {
  data: ColumnItem
  className?: string | ''
}
export default function ColumnCard({ data, className }: Props) {
  return (
    <div className={`column-card-container text-dark-500 ${className}`}>
      <a href="#">
        <div className="column-card-img relative mb-[10px]">
          <img className="" src={data.img} alt="" />
          <div
            className="absolute bottom-0 left-0 w-[144px] flex justify-between
               px-[10px] py-[5px] bg-primary-300 tex-[15px] text-white text-[15px]"
          >
            <span>{data.date}</span>
            <span>{data.time}</span>
          </div>
        </div>
      </a>
      <div className="column-card-content text-lg font-light text-xs  text-[15px]">
        <a href="#">{data.content}</a>
      </div>
      <div className="column-card-tags">
        {data.tags && data.tags.length > 0
          ? data.tags.map((tag: string) => (
              <a
                className="mr-[10px] text-xs text-primary-400"
                href={`/tab/${tag}`}
                key={tag}
              >
                #{tag}
              </a>
            ))
          : 'ABC'}
      </div>
    </div>
  )
}
