import React, { useEffect } from 'react'
import { Avatar, Switch, Table } from 'antd';
import ActionButtons from '../../../components/admin/ActionButton';

export default function UserManagement() {
  const avatarSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrKIQCcSIDs-W59_BaEjo92vSsqfgvoqv_8LdiXTXEf8EtWAF0awb38irsWz20_JrHsxU&usqp=CAU"
  const users = [
    { id: 1, avatar: avatarSrc, email: "admin@gmail.com", fullname: "admin", role: "ROOT", active: true },
    { id: 3, avatar: avatarSrc, email: "vienhoingu@gmail.com", fullname: "Viễn hơi ngu", role: "STUDENT", active: true },
    { id: 4, avatar: avatarSrc, email: "vienkhonhngu@gmail.com", fullname: "Viễn không ngu", role: "TEACHER", active: true },
    { id: 5, avatar: avatarSrc, email: "vienbingu@gmail.com", fullname: "Viễn bị ngu", role: "ADMIN", active: false },
  ];
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Avatar", dataIndex: "avatar", key: "avatar", render: (avatar) => <Avatar src={avatar} /> },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Fullname", dataIndex: "fullname", key: "fullname" },
    { title: "Role", dataIndex: "role", key: "role" },
    // { title: "Active", dataIndex: "active", key: "active", render: (active) => <Switch defaultChecked={active} /> },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (<><ActionButtons type="User" record={record} /></>)
    }
  ];
  return (
    <div>
      <Table
      className="admin-table"
        columns={columns}
        dataSource={users}
        rowKey="id"
      />

    </div>
  )
}
