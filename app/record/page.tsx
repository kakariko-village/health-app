import RecordChart from './components/RecordChart'
import DiaryItem from './components/MyDiary'
const apiUrl = process.env.API_BASE || ''
async function getAllData() {
  const res = await fetch(`${apiUrl}/my-diary?_page=1&_limit=8`)
  return res.json()
}
export default async function Record() {
  const myDiary = await getAllData()
  return (
    <div className="my-record 2xl:px-[160px] xl:px-[80px] mt-[130px] mb-[50px]">
      <RecordChart />
      <DiaryItem data={myDiary} apiUrl={apiUrl} />
    </div>
  )
}
