import { Navbar, Typography } from '@/components/MUI'
export default function Footer() {
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 text-base leading-none"
      >
        <a href="#" className="flex items-center">
          <span className="ml-[10px]">会員登録</span>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 text-base leading-none"
      >
        <a href="#" className="flex items-center">
          <span className="ml-[10px]">運営会社</span>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 text-base leading-none"
      >
        <a href="#" className="flex items-center">
          <span className="ml-[10px]">利用規約</span>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 text-base leading-none"
      >
        <a href="#" className="flex items-center">
          <span className="ml-[10px]">個人情報の取扱について</span>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 text-base leading-none"
      >
        <a href="#" className="flex items-center">
          <span className="ml-[10px]">特定商取引法に基づく表記</span>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 text-base leading-none"
      >
        <a href="#" className="flex items-center">
          <span className="ml-[10px]">お問い合わせ</span>
        </a>
      </Typography>
    </ul>
  )
  return (
    <>
      <Navbar
        className="bottom z-10 h-max max-w-full rounded-none 
          py-[56px] 2xl:px-[160px] xl:px-[80px] bg-dark-500 bg-opacity-100 border-none"
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
          </div>
        </div>
      </Navbar>
    </>
  )
}
