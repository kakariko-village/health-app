import 'react-circular-progressbar/dist/styles.css'
import './globals.scss'
import type { Metadata } from 'next'
import { ThemeProvider } from './components/MUI'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { NotoSansJPFont } from './fonts'
import BackToTop from '@/components/Common/BackToTop'
export const metadata: Metadata = {
  title: 'Health App',
  description: 'Health App Test',
}

const customTheme = {
  button: {
    styles: {
      background: '#000',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider value={customTheme}>
      <html lang="en">
        <body className={NotoSansJPFont.className}>
          <Header />
          <div className="wrapper">{children}</div>
          <div className="fixed right-[70px] bottom-[150px]">
            <BackToTop />
          </div>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  )
}
