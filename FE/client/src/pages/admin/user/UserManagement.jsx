import { Avatar, Input, Modal, Switch, Table } from 'antd';
import debounce from 'lodash.debounce';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActionButtons from '../../../components/admin/ActionButton';
import { getAllUserActionAsync, updateUserActiveActionAsync } from '../../../redux/reducer/admin/userReducer';

export default function UserManagement() {
  const dispatch = useDispatch();
  const userApi = useSelector(state => state.userReducer.userApi);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; 
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    dispatch(getAllUserActionAsync());
  }, [dispatch]);

  useEffect(() => {
    setFilteredData(userApi);
  }, [userApi]);

  // Lọc dữ liệu khi nhập vào ô tìm kiếm (xoá khoảng trắng + không phân biệt hoa thường)
  const handleSearch = debounce((value) => {
    const searchValue = value.toLowerCase().replace(/\s/g, ""); // Xoá khoảng trắng
    const filtered = userApi.filter(user =>
      user.email.toLowerCase().replace(/\s/g, "").includes(searchValue) ||
      user.fullName.toLowerCase().replace(/\s/g, "").includes(searchValue)
    );
    setFilteredData(filtered);
  }, 300);

  const columns = [
    { title: "ID", dataIndex: "id", key: "id", width: 50 },
    { 
      title: "Avatar", 
      dataIndex: "avatar", 
      key: "avatar", 
      width: 80,
      render: (avatar) => (
        <Avatar src={avatar || "https://1nedrop.com/wp-content/uploads/2024/10/avatar-fb-mac-dinh-56hPlMap.jpg"} />
      ),
    },
    { title: "Email", dataIndex: "email", key: "email", width: "20%" }, 
    { title: "Fullname", dataIndex: "fullName", key: "fullName", width: "20%" },
    { 
      title: "Role", 
      dataIndex: "role", 
      key: "role",
      width: "15%",
      filters: [
        { text: "ADMIN", value: "ADMIN" },
        { text: "STUDENT", value: "STUDENT" },
        { text: "INSTRUCTOR", value: "INSTRUCTOR" },
      ],
      onFilter: (value, record) => record.role === value,
    },
    { 
      title: "Active", 
      dataIndex: "active", 
      key: "active", 
      width: "10%", 
      render: (active, record) => (
        <Switch
          checked={active}
          onChange={() => {
            Modal.confirm({
              title: "Xác nhận thay đổi trạng thái",
              content: `Bạn có chắc muốn ${active ? "tắt" : "bật"} trạng thái của người dùng này không?`,
              onOk: () => {
                dispatch(updateUserActiveActionAsync(record.id, !active))
                .then(() => dispatch(getAllUserActionAsync())); // Cập nhật danh sách sau khi đổi trạng thái
              },
            });
          }}
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      width: "15%",
      render: (_, record) => <ActionButtons type="User" record={record} />
    }
  ];
  
  return (
    <div>
      {/* Ô tìm kiếm */}
      <Input 
        placeholder="Tìm kiếm theo tên hoặc email..."
        onChange={(e) => {
          setSearchText(e.target.value);
          handleSearch(e.target.value);
        }}
        style={{ marginBottom: 16, width: 300 }}
      />

      {/* Bảng danh sách */}
      <Table
        className="admin-table"
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: filteredData.length,
          onChange: (page) => setCurrentPage(page),
          showSizeChanger: false
        }}
        scroll={{ x: "max-content", y: 300 }} 
        tableLayout="auto"
      />
    </div>
  );
}
