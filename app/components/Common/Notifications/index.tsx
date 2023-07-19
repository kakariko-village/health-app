'use client'
import Notification from '@/components/Common/Notification'

interface NotificationItem {
  type: string
  message: string
}
export type Props = {
  data: Array<NotificationItem>
}
export default function Notifications({ data }: Props) {
  return (
    <>
      {data && data.length > 0 ? (
        <div className="fixed left-0 top-[85px]">
          {data.map((item) => (
            <Notification
              key={`${item.message}-${item.type}`}
              message={item.message}
              type={item.type}
            />
          ))}
        </div>
      ) : (
        ''
      )}
    </>
  )
}