'use client'
import './styles.scss'
export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="back-to-top cursor-pointer" onClick={() => scrollToTop()}>
      <svg
        className="normal-ico"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 0.5C36.9787 0.5 47.5 11.0213 47.5 24C47.5 36.9787 36.9787 47.5 24 47.5C11.0213 47.5 0.5 36.9787 0.5 24C0.5 11.0213 11.0213 0.5 24 0.5Z"
          fill="white"
          fill-opacity="0.01"
          stroke="#777777"
        />
        <path
          d="M30.5853 28.042L24.0002 21.6579L17.4152 28.042L16.539 27.1925L24.0002 19.959L31.4615 27.1925L30.5853 28.042Z"
          fill="#777777"
        />
      </svg>
      <svg
        className="hover-ico"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0Z"
          fill="#FF963C"
        />
        <path
          d="M30.5853 28.042L24.0002 21.6579L17.4152 28.042L16.539 27.1925L24.0002 19.959L31.4615 27.1925L30.5853 28.042Z"
          fill="white"
          stroke="white"
        />
      </svg>
    </div>
  )
}
