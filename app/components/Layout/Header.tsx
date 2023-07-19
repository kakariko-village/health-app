import { Navbar, MobileNav, Typography, Badge } from '@/components/MUI'
import Image from 'next/image'
import Logo from '@/assets/icons/logo.svg'
import Edit from '@/assets/icons/edit.svg'
import Noti from '@/assets/icons/notiifcation.svg'
import Award from '@/assets/icons/award.svg'
import BurgerButton from '@/components/Common/BurgerButton'
const MenuList = [
  {
    name: '自分の記録',
    url: '/record',
  },
  {
    name: '体重グラフ',
    url: '#',
  },
  {
    name: '目標',
    url: '#',
  },
  {
    name: '選択中のコース',
    url: '#',
  },
  {
    name: 'コラム一覧',
    url: '/column',
  },
  {
    name: '設定',
    url: '#',
  },
]

export default function Header() {
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 text-base"
      >
        <a href="/record" className="flex items-center">
          <Image src={Edit} width="32" height="32" alt="Edit Icon" />
          <span className="ml-[10px]">自分の記録</span>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 text-base"
      >
        <a href="#" className="flex items-center">
          <Image src={Award} width="32" height="32" alt="Edit Icon" />
          <span className="ml-[10px]">チャレンジ</span>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 text-base"
      >
        <a href="#" className="flex items-center">
          <Badge content="5">
            <Image src={Noti} width="32" height="32" alt="Notification Icon" />
          </Badge>
          <span className="ml-[10px]">お知らせ</span>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 text-base"
      >
        <BurgerButton list={MenuList} />
      </Typography>
    </ul>
  )

  return (
    <>
      <Navbar
        className="fixed top z-20 h-max max-w-full rounded-none 
          py-[7px] 2xl:px-[160px] xl:px-[80px] bg-dark-500 bg-opacity-100 border-none"
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <a href="/">
            <Image src={Logo} width="144" height="64" alt="Healthy" />
          </a>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
          </div>
        </div>
      </Navbar>
    </>
  )
}
