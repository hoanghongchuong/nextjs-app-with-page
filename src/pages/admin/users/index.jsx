import React from 'react'
import AdminLayout from '@/components/layout/admin'

const UserList = () => {
  return (
    <div>UserList</div>
  )
}

export default UserList

UserList.getLayout = function getLayout(page) {
  return (
    <AdminLayout>{page}</AdminLayout>
  )
}