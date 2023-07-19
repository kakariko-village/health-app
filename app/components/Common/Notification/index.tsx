'use client'
import { useState, Fragment } from 'react'
import { Alert } from '@/components/MUI'

export type Props = {
  type: string
  message: string
}
export default function Notifications({ type, message }: Props) {
  const [open, setOpen] = useState(true)
  const formatNotificationType = (type: string) => {
    switch (type) {
      case 'error':
        return 'red'
      case 'success':
        return 'green'
      case 'warning ':
        return 'amber'
      default:
        return 'blue'
    }
  }
  return (
    <Fragment>
      <Alert
        color={formatNotificationType(type)}
        open={open}
        onClose={() => setOpen(false)}
        className="mb-[5px]"
      >
        {message}
      </Alert>
    </Fragment>
  )
}
