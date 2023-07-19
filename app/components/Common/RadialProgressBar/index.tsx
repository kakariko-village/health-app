'use client'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
export default function RadialProgressBar() {
  const percentage = 66
  return (
    <CircularProgressbar
      className="radial-progress-bar"
      value={percentage}
      //   text={`${percentage}%`}
      strokeWidth={2}
      styles={buildStyles({
        strokeLinecap: 'butt',
        trailColor: 'transparent',
        pathColor: '#fff',
        textColor: '#fff',
      })}
    />
  )
}
