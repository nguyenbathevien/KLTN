import React, { useState } from 'react';
import { Button, Form, Input, Modal, Select, Upload } from 'antd';
import { EditOutlined, DeleteOutlined, UserOutlined, MailOutlined, LockOutlined, HomeOutlined, FormOutlined, PlusOutlined, BookOutlined, FileTextOutlined, DollarOutlined } from '@ant-design/icons';

const { Option } = Select;

const ActionButtons = ({ type, record }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [form] = Form.useForm();

  const showModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
    form.setFieldsValue(record); 
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    form.validateFields()
      .then((values) => {
        setIsModalOpen(false);
      })
      .catch((errorInfo) => {
        console.log("Validation Failed:", errorInfo);
      });
  };
  const renderFormDelete = () => {
    switch(type){
      case "User":
        return (
          <p>Bạn có chắc chắn muốn xóa User không?</p>
        );
      case "Course":
        return (
          <p>Bạn có chắc chắn muốn xóa Course không?</p>
        );
      
    }
  }
  const renderFormEdit = () => {
    switch(type){
      case "User": 
        return (
        <Form form={form} layout="vertical">
          {/* Trường FullName   */}
          <Form.Item name="fullname" rules={[{ required: true, message: "FullName is required!" }]}>
            <Input prefix={<UserOutlined />} placeholder="FullName" />
          </Form.Item>
  
          {/* Trường Email  */}
          <Form.Item name="email" rules={[{ required: true, message: "Email is required!" }]}>
            <Input prefix={<MailOutlined />} placeholder="Email " />
          </Form.Item>
  
          {/* Trường Address  */}
          <Form.Item name="address" rules={[{ required: true, message: "Address is required!" }]}>
            <Input prefix={<HomeOutlined />} placeholder="Address " />
          </Form.Item>
  
          {/* Trường Phone  */}
          <Form.Item name="phone" rules={[{ required: true, message: "Phone is required!" }]}>
            <Input prefix={<FormOutlined />} placeholder="Phone " />
          </Form.Item>
  
          {/* Trường Password  */}
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]} hasFeedback>
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
  
          {/* Trường Role  */}
          <Form.Item name="role" rules={[{ required: true }]}>
            <Select placeholder="Select a role">
              <Option value="USER">User</Option>
              <Option value="ADMIN">Admin</Option>
            </Select>
          </Form.Item>
        </Form>
      );
      case "Course":
        return (
          <Form form={form} layout="vertical">
            {/* Trường Name   */}
            <Form.Item name="name" rules={[{ required: true, message: "Course Name is required!" }]}>
            <Input prefix={<BookOutlined />} placeholder="Course Name" />
          </Form.Item>
    
            {/*Trường Mô tả khóa học */}
          <Form.Item name="description" rules={[{ required: true, message: "Description is required!" }]}>
            <Input.TextArea prefix={<FileTextOutlined />} placeholder="Description" />
          </Form.Item>
    
            {/*Trường Giá khóa học */}
          <Form.Item name="price" rules={[{ required: true, message: "Price is required!" }]}>
            <Input prefix={<DollarOutlined />} type="number" placeholder="Price" />
          </Form.Item>
    
            {/*Trường Người hướng dẫn */}
          <Form.Item name="instructor" rules={[{ required: true, message: "Instructor is required!" }]}>
            <Input prefix={<UserOutlined />} placeholder="Instructor" />
          </Form.Item>
    
            {/*Trường Danh mục khóa học */}
          <Form.Item name="category" rules={[{ required: true, message: "Category is required!" }]}>
          <Input  placeholder="Khóa học" />
          </Form.Item>
    
            {/*Trường Trạng thái khóa học */}
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
      <Button 
        type="text" 
        icon={<EditOutlined />} 
        style={{ color: "gold" }} 
        onClick={() => showModal("Edit")}
      />

      {/* Nút Delete */}
      <Button 
        type="text" 
        icon={<DeleteOutlined />} 
        danger 
        onClick={() => showModal("Delete")}
      />

      {/* Modal */}
      <Modal
        title={`${modalType} ${type}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {modalType === "Edit" ? renderFormEdit() : renderFormDelete()}
      </Modal>
    </>
  );
};

export default ActionButtons;
