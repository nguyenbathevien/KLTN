import React from 'react'
import { Avatar, Table, Tag } from 'antd';
import ActionButtons from '../../../components/admin/ActionButton';

export default function CourseManagement() {
  const courses = [
    { id: 1, image: "https://externlabs.com/blogs/wp-content/uploads/2021/10/what-is-react-1024x724.png", name: "ReactJS Basics", instructor: "Nguyễn Văn A", category: "Web Development", status: "Active" },
    { id: 2, image: "https://cati-image-v3.s3.ap-northeast-1.amazonaws.com/cati-api/storage/images/courses/2019_05_31_24325735d572578d2c0859847e19bc5a.png", name: "NodeJS Advanced", instructor: "Trần Văn B", category: "Backend", status: "Inactive" },
    { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjky626H1VJQMZkbqnckkfuMI7cWifJcu1Mw&s", name: "Data Science", instructor: "Lê Thị C", category: "AI/ML", status: "Active" },
  ];
  
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Image", dataIndex: "image", key: "image", render: (image) => <Avatar src={image} /> },
    { title: "Course Name", dataIndex: "name", key: "name" },
    { title: "Instructor", dataIndex: "instructor", key: "instructor" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Status", dataIndex: "status", key: "status", render: (status) => <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag> },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (<><ActionButtons type="Course" record={record} /></>)
    }
  ];
  
  return (
    <div>
      <Table
      className="admin-table"
        columns={columns}
        dataSource={courses}
        rowKey="id"
      />

    </div>
  )
}
