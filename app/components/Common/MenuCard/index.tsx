'use client'
import './styles.scss'
export type Props = {
  name: string
  img: string
  className?: string | ''
}
export default function MenuCard({ name, img, className }: Props) {
  return (
    <div
      className={`menu-card-container flex justify-center relative ${className}`}
    >
      <a href="/">
        <img className="menu-card-img" src={img} alt={name} />
        <div className="menu-card-name absolute bottom-0 left-0 px-[16px] py-[14px] bg-primary-300 tex-[15px] text-white">
          {name}
        </div>
      </a>
    </div>
  )
}
