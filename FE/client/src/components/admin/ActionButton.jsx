  import { BookOutlined, DeleteOutlined, DollarOutlined, EditOutlined, FileTextOutlined, FormOutlined, HomeOutlined, MailOutlined, UserOutlined, } from "@ant-design/icons";
import { Button, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserActionAsync, updateUserActionAsync } from "../../redux/reducer/admin/userReducer";

  const { Option } = Select;
  const ActionButtons = ({ type, record }) => {
    // State để quản lý trạng thái mở/đóng của modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    // State để lưu loại modal (Edit hoặc Delete)
    const [modalAction, setModalAction] = useState("");
    // Khởi tạo form từ Ant Design
    const [form] = Form.useForm();

    const dispatch = useDispatch()

    // Hàm hiển thị modal, nhận vào loại modal (Edit hoặc Delete)
    const showModal = (type) => {
      setModalAction(type);
      setIsModalOpen(true);
      // Đổ dữ liệu từ record vào form khi mở modal Edit
      form.setFieldsValue(record);
    };

    // Hàm đóng modal
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    // Hàm xử lý khi nhấn OK trong modal (edit vs delete)
    const handleOk = async () => {
      try {
        if (modalAction === "Edit") {
          const values = await form.validateFields(); // Chờ validate

          Modal.confirm({
            title: "Xác nhận cập nhật",
            content: "Bạn có chắc chắn muốn thay đổi thông tin không?",
            okText: "Xác nhận",
            cancelText: "Hủy",
            onOk: async () => {
              if (type === "User") {
                await dispatch(updateUserActionAsync(values));
              } else if (type === "Course") {
                console.log("Cập nhật Course:", values);
              }
              setIsModalOpen(false);
            },
          });
        } else if (modalAction === "Delete") {
          if (type === "User") {
            await dispatch(deleteUserActionAsync(record.id));
          } else if (type === "Course") {
            console.log("Cập nhật Course:", values);
          }
          setIsModalOpen(false);
        }
      } catch (error) {
        console.error("Validation Failed:", error);
      }
    };




    // Hàm hiển thị nội dung modal Delete tùy theo loại dữ liệu
    const renderFormDelete = () => {
      switch (type) {
        case "User":
          return <p>Bạn có chắc chắn muốn xóa người dùng "{record.fullName} không ?"</p>
          
        case "Course":
          return <p>Bạn có chắc chắn muốn xóa Course không?</p>;
        default:
          return null;
      }
    };

    // Hàm hiển thị nội dung modal Edit tùy theo loại dữ liệu
    const renderFormEdit = () => {
      switch (type) {
        case "User":
          return (
            <Form form={form} layout="vertical">
              <Form.Item name="id" >
                <Input prefix={<UserOutlined />} value={record.id} disabled />
              </Form.Item>

              <Form.Item name="email" rules={[{ required: true, message: "Email is required!" }]}>
                <Input prefix={<MailOutlined />} placeholder="Email " disabled />
              </Form.Item>

              <Form.Item name="fullName" rules={[{ required: true, message: "FullName is required!" }]}>
                <Input prefix={<UserOutlined />} placeholder="FullName" />
              </Form.Item>

              <Form.Item name="address" rules={[{ required: true, message: "Address is required!" }]}>
                <Input prefix={<HomeOutlined />} placeholder="Address " />
              </Form.Item>

              <Form.Item name="phone" rules={[{ required: true, message: "Phone is required!" }]}>
                <Input prefix={<FormOutlined />} placeholder="Phone " />
              </Form.Item>

              <Form.Item name="role" rules={[{ required: true }]}>
                <Select placeholder="Select a role">
                  <Option value="INSTRUCTOR">INSTRUCTOR</Option>
                  <Option value="STUDENT">STUDENT</Option>
                  <Option value="ADMIN">Admin</Option>
                </Select>
              </Form.Item>
            </Form>
          );
        case "Course":
          return (
            <Form form={form} layout="vertical">
              <Form.Item name="name" rules={[{ required: true, message: "Course Name is required!" }]}>
                <Input prefix={<BookOutlined />} placeholder="Course Name" />
              </Form.Item>

              <Form.Item name="description" rules={[{ required: true, message: "Description is required!" }]}>
                <Input.TextArea prefix={<FileTextOutlined />} placeholder="Description" />
              </Form.Item>

              <Form.Item name="price" rules={[{ required: true, message: "Price is required!" }]}>
                <Input prefix={<DollarOutlined />} type="number" placeholder="Price" />
              </Form.Item>

              <Form.Item name="instructor" rules={[{ required: true, message: "Instructor is required!" }]}>
                <Input prefix={<UserOutlined />} placeholder="Instructor" />
              </Form.Item>

              <Form.Item name="category" rules={[{ required: true, message: "Category is required!" }]}>
                <Input placeholder="Khóa học" />
              </Form.Item>

              <Form.Item name="status" rules={[{ required: true }]}>
                <Select placeholder="Select status">
                  <Option value="Active">Active</Option>
                  <Option value="Inactive">Inactive</Option>
                </Select>
              </Form.Item>
            </Form>
          );
        default:
          return null;
      }
    };

    return (
      <>
        {/* Nút Edit */}
        <Button type="text" icon={<EditOutlined />} style={{ color: "gold" }} onClick={() => showModal("Edit")} />

        {/* Nút Delete */}
        <Button type="text" icon={<DeleteOutlined />} danger onClick={() => showModal("Delete")} />

        {/* Modal */}
        <Modal
          title={`${modalAction} ${type}`}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form form={form} style={{ display: "none" }} />
          {modalAction === "Edit" ? renderFormEdit() : renderFormDelete()}
        </Modal>
      </>
    );
  };

  export default ActionButtons;