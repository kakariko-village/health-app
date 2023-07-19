'use client'
import RecommendedItem from '@/components/Common/RecommendedItem'
export default function RecommendedSection() {
  return (
    <div className="recommended-container grid grid-cols-4 gap-10 mb-[50px]">
      <a href="#">
        <RecommendedItem title="RECOMMENDED COLUMN" subtitle="オススメ" />
      </a>
      <a href="#">
        <RecommendedItem title="RECOMMENDED DIET" subtitle="ダイエット" />
      </a>
      <a href="#">
        <RecommendedItem title="RECOMMENDED BEAUTY" subtitle="美容" />
      </a>
      <a href="#">
        <RecommendedItem title="RECOMMENDED HEALTH" subtitle="健康" />
      </a>
    </div>
  )
}
