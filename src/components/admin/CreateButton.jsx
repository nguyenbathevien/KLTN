import { Button, Form, Input, Modal, Select, Upload } from "antd";
import { FormOutlined, HomeOutlined, LockOutlined, MailOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";

const CreateButton = ({ type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const { Option } = Select;
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields(); // Reset form khi đóng modal
  };

  const handleOk = async () => {
    try {
      await form.validateFields(); // Kiểm tra form
      console.log(`Creating new ${type}...`);
      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.log("Validation failed:", error);
    }
  };

  const renderForm = () => {
    switch (type) {
      case "User":
        return (
          <>
            {/* Trường FullName   */}
            <Form.Item name="fullName" rules={[{ required: true, message: "FullName is required!" }]}>
              <Input prefix={<UserOutlined />} placeholder="FullName" />
            </Form.Item>
            {/* Trường email  */}
            <Form.Item name="email" rules={[{ required: true, message: "Email is required!" }]}>
              <Input prefix={<MailOutlined />} placeholder="Email " />
            </Form.Item>
            {/* Trường address  */}
            <Form.Item name="address" rules={[{ required: true, message: "Address is required!" }]}>
              <Input prefix={<HomeOutlined />} placeholder="Address " />
            </Form.Item>
            {/* Trường sđt  */}
            <Form.Item name="phone" rules={[{ required: true, message: "Phone is required!" }]}>
              <Input prefix={<FormOutlined />} placeholder="Phone " />
            </Form.Item>
            {/* Trường mật khẩu  */}
            <Form.Item name="password" rules={[{required: true,message: 'Please input your password!',},]} hasFeedback >
              <Input.Password prefix={<LockOutlined />} placeholder="password" />
            </Form.Item>
            {/* Trường Role  */}
            <Form.Item name="role"  rules={[{ required: true }]}>
              <Select placeholder="Select a role">
                <Option value="USER">User</Option>
                <Option value="ADMIN">Admin</Option>
              </Select>
            </Form.Item>
            {/* Upload avatar  */}
            <Form.Item label="Upload Avatar">
              <Upload action="/upload.do" listType="picture-card">
                <button style={{border: 0,background: 'none',}}type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8,}}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
          </>
        );
      case "Course": 
        return (
          <>
            {/* Trường Name   */}
            <Form.Item name="fullName" rules={[{ required: true, message: "FullName is required!" }]}>
              <Input prefix={<UserOutlined />} placeholder="FullName" />
            </Form.Item>
          </>
        )
      default:
        return null;
    }
  };

  return (
    <>
      <Button type="primary" danger icon={<PlusOutlined />} style={{ marginBottom: "16px" }} onClick={showModal}>Add New {type}</Button>
      <Modal title={`Create New ${type}`} open={isModalOpen} onCancel={handleCancel} onOk={handleOk}>
        <Form form={form} layout="vertical">{renderForm()}</Form>
      </Modal>
    </>
  );
};

export default CreateButton;
