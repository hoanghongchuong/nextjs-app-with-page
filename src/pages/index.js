import MainLayout from '@/components/layout/main'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      home page
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <MainLayout>{page}</MainLayout>
  )
}