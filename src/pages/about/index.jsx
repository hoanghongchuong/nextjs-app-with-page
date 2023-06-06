import MainLayout from '@/components/layout/main'
import React from 'react'

const AboutPage = () => {
  return (
    <div>AboutPage</div>
  )
}

export default AboutPage

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>{page}</MainLayout>
  )
}