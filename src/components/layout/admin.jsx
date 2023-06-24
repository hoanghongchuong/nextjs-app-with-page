import { useAdminAuth } from '@/hooks/use-admin-auth'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import AdminSidebar from '../admin-comon/sidebar'

function AdminLayout({children}) {
  const router = useRouter()
  const {profile, firstLoading} = useAdminAuth()

  useEffect(() => {
    if(!firstLoading && !profile?.data?.data?.name) {
      router.push('/admin/login')
    }
  }, [router, profile, firstLoading])

  if(!profile?.data?.data?.name) return <p>Loading...</p>

  return (
    <div>
      <AdminSidebar/>
        <h1>AdminLayout, {profile?.data?.data?.name}</h1>
        {children}

    </div>
  )
}

export default AdminLayout