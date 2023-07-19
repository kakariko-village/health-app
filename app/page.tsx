import DataChart from '@/components/Common/Chart'
import RadialProgressBar from '@/components/Common/RadialProgressBar'
import './mypage/home.scss'
import FoodMenu from './mypage/components/FoodMenu'
const apiUrl = process.env.API_BASE || ''
async function getAllData() {
  const res = await fetch(`${apiUrl}/menu-list?_page=1&_limit=8`)
  return res.json()
}
export default async function Home() {
  const menuData = await getAllData()
  return (
    <div className="my-page">
      <div className="flex pt-[78px] slideInRight animated-2">
        <div className="image-container relative">
          <div className="absolute z-10 top-0 left-0 right-0 bottom-0 flex flex-wrap justify-center content-center">
            <div className="relative">
              <RadialProgressBar />
              <div className="absolute text-white radial-progress-bar-value">
                <span className="mr-[5px] text-lg">05/21</span>
                <span className="text-[25px]">75%</span>
              </div>
            </div>
          </div>
          <img className="block" src="./images/main_photo.jpg" alt="" />
        </div>
        <div className="grow chart-container">
          <DataChart />
        </div>
      </div>
      <div className="pt-[9px] 2xl:px-[160px] xl:px-[80px]">
        <FoodMenu menu={menuData} apiUrl={apiUrl} />
      </div>
    </div>
  )
}
