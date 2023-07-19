'use client'
import { Button } from '@/components/MUI'
import './styles.scss'
export type Props = {
  title: string
  img: string
  btnText: string
  className?: string | ''
  callback: () => void
}
export default function RecordBtn({
  title,
  img,
  btnText,
  className,
  callback,
}: Props) {
  return (
    <div
      className={`record-btn-container relative border-[24px] border-primary-300 ${className}`}
    >
      <img src={img} alt={title} />
      <div className="absolute bg-black w-[100%] top-0 left-0 right-0 bottom-0 opacity-70" />
      <div className="absolute record-btn-content text-center w-[200px]">
        <h3 className="text-[25px] font-normal text-primary-300 mb-[16px] leading-none">
          {title}
        </h3>
        <Button
          className="transition duration-700 ease-in-out bg-primary-400 
            text-white text-sm min-w-[160px] px-[10px] py-[10px] rounded-none hover:bg-primary-300 font-light"
          onClick={() => callback()}
        >
          {btnText}
        </Button>
      </div>
    </div>
  )
}
