import React from 'react'
import AdminLayout from '../components/admin/layout/AdminLayout'
import Dashboard from '../pages/admin/dashboard/Dashboard'
import UserManagement from '../pages/admin/user/UserManagement'
import CourseManagement from '../pages/admin/course/CourseManagement'
import VoucherManagement from '../pages/admin/voucher/VoucherManagement'
import AchievementManagement from '../pages/admin/achievement/AchievementManagement'
import StudyManagement from '../pages/admin/study/StudyManagement'
import { Route, Routes } from 'react-router-dom'
import Page404 from '../Page404'

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="courses" element={<CourseManagement />} />
        <Route path="vouchers" element={<VoucherManagement />} />
        <Route path="achievements" element={<AchievementManagement />} />
        <Route path="studies" element={<StudyManagement />} />
        
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default AdminRoutes