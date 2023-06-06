import AdminLayout from '@/components/layout/admin'
import React, { useEffect } from 'react'
import Link from "next/link";
import { useAdminAuth } from '@/hooks/use-admin-auth';
import { useRouter } from 'next/router';

const AdminPage = () => {
  const router = useRouter();
  const { profile, error, login, logout } = useAdminAuth();
  // const user = profile.data.data

  return (
    <div>
      <h1>hello, </h1>
      <Link href="/admin/classroom">Class room</Link>
    </div>
  )
}

export default AdminPage


AdminPage.getLayout = function getLayout(page) {
  return (
    <AdminLayout>{page}</AdminLayout>
  )
}