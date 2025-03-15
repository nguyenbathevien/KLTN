import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../components/admin/layout/AdminLayout'
import AchievementManagement from '../pages/admin/achievement/AchievementManagement'
import CourseManagement from '../pages/admin/course/CourseManagement'
import Dashboard from '../pages/admin/dashboard/Dashboard'
import StudyManagement from '../pages/admin/study/StudyManagement'
import UserManagement from '../pages/admin/user/UserManagement'
import VoucherManagement from '../pages/admin/voucher/VoucherManagement'

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
    </Routes>
  )
}

export default AdminRoutes