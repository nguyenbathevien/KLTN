import { ExclamationCircleOutlined, FormOutlined, HomeOutlined, LockOutlined, MailOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Select } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserActionAsync } from "../../redux/reducer/admin/userReducer";

const CreateButton = ({ type }) => {
  // State để quản lý trạng thái mở/đóng của modal nhập thông tin
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State để quản lý trạng thái mở/đóng của modal xác nhận
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  // Tạo instance của Form để quản lý dữ liệu nhập
  const [form] = Form.useForm();
  const { Option } = Select;
  const dispatch = useDispatch();
  // State lưu trữ dữ liệu nhập vào để hiển thị trong modal xác nhận
  const [formData, setFormData] = useState(null);

  // Mở modal nhập thông tin
  const showModal = () => setIsModalOpen(true);

  // Đóng modal nhập thông tin và reset dữ liệu form
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  // Khi nhấn "OK" trong modal nhập -> Hiển thị form xác nhận
  const handleOk = async () => {
    try {
      // Validate dữ liệu nhập vào form
      const values = await form.validateFields();
      console.log(values)
      setFormData(values); // Lưu dữ liệu vào state
      setIsModalOpen(false); // Đóng modal nhập thông tin
      setIsConfirmModalOpen(true); // Mở modal xác nhận
    } catch (error) {
      // Hiển thị thông báo lỗi nếu nhập thiếu thông tin
      Modal.error({ title: "Validation Failed", content: "Vui lòng nhập đầy đủ thông tin!" });
    }
  };

  // Khi nhấn "Confirm" trong modal xác nhận -> Gửi dữ liệu tới Redux
  const handleConfirm = async() => {
    if (formData) {
      // Nếu là loại "User", dispatch action thêm user
      if (type === "User") {
       await dispatch(addUserActionAsync(formData));
      }
      // Có thể mở rộng thêm trường hợp khác như "Course"
    }
    setIsConfirmModalOpen(false); // Đóng modal xác nhận
    form.resetFields(); // Reset form sau khi gửi dữ liệu
  };

  // Khi nhấn "Cancel" trong modal xác nhận -> Quay lại modal nhập thông tin
  const handleCancelConfirm = () => {
    setIsConfirmModalOpen(false);
    setIsModalOpen(true);
  };

  // Hàm render form nhập thông tin dựa vào loại dữ liệu
  const renderForm = () => {
    if (type === "User") {
      return (
        <>
          <Form.Item name="fullName" rules={[{ required: true, message: "FullName is required!" }]}>
            <Input prefix={<UserOutlined />} placeholder="FullName" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Email is required!" },
              { type: "email", message: "Invalid email format!" }, // Kiểm tra định dạng email cơ bản
              {
                pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                message: "Email must be a Gmail address (e.g., example@gmail.com)",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item name="address" rules={[{ required: true, message: "Address is required!" }]}>
            <Input prefix={<HomeOutlined />} placeholder="Address " />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Phone is required!" },
              {
                pattern: /^[0-9]{10}$/, // Chỉ chấp nhận 10 chữ số từ 0-9
                message: "Phone number must be exactly 10 digits!",
              },
            ]}
          >
            <Input prefix={<FormOutlined />} placeholder="Phone" maxLength={10} />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]} hasFeedback>
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item name="role" rules={[{ required: true }]}>
            <Select placeholder="Select a role">
              <Option value="STUDENT">STUDENT</Option>
              <Option value="ADMIN">ADMIN</Option>
              <Option value="INSTRUCTOR">INSTRUCTOR</Option>
            </Select>
          </Form.Item>
          {/* Upload avatar  */}
            {/* <Form.Item label="Upload Avatar">
              <Upload action="/upload.do" listType="picture-card">
                <button style={{border: 0,background: 'none',}}type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8,}}>Upload</div>
            </button>
          </Upload>
        </Form.Item> */}
        </>
      );
    }
    return null; // Nếu không phải "User", trả về null
  };

  return (
    <>
      {/* Nút mở modal nhập thông tin */}
      <Button type="primary" danger icon={<PlusOutlined />} style={{ marginBottom: "16px" }} onClick={showModal}>
        Add New {type}
      </Button>

      {/* Modal nhập thông tin */}
      <Modal title={`Create New ${type}`} open={isModalOpen} onCancel={handleCancel} onOk={handleOk}>
        <Form form={form} layout="vertical">{renderForm()}</Form>
      </Modal>

      {/* Modal xác nhận thông tin */}
      <Modal
        title="Confirm Information"
        open={isConfirmModalOpen}
        onOk={handleConfirm}
        onCancel={handleCancelConfirm}
        okText="Confirm"
        cancelText="Edit"
        icon={<ExclamationCircleOutlined />}
      >
        {/* Hiển thị danh sách thông tin đã nhập để xác nhận */}
        {formData && (
          <ul>
            {Object.entries(formData).map(([key, value]) => (
              <li key={key}><strong>{key}:</strong> {value}</li>
            ))}
          </ul>
        )}
      </Modal>
    </>
  );
};

export default CreateButton;
