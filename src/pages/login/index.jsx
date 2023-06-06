import MainLayout from '@/components/layout/main'
import React from 'react'

function Login() {
  return (
    <div>Login</div>
  )
}

export default Login

Login.getLayout = function getLayout(page) {
    return (
        <MainLayout>{page}</MainLayout>
    )
}