'use client'

export type Props = {
  title: string
  subtitle: string
}
export default function RecommendedItem({ title, subtitle }: Props) {
  return (
    <div
      className="recommended-item bg-dark-600 px-[20px] py-[20px] duration-700 ease-in-out 
      text-center flex items-center justify-center flex-wrap hover:bg-primary-500"
    >
      <h3 className="uppercase text-primary-300 font-normal text-[22px] heading-none w-[100%] mb-[10px]">
        {title}
      </h3>
      <div className="border-b-2 border-white w-[56px] mb-[10px]" />
      <h4 className="text-white font-light text-lg w-[100%]">{subtitle}</h4>
    </div>
  )
}
