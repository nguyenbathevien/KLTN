import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate(); // Gọi hàm useNavigate()

  return (
    <div className="page-404">
      <div className="content">
        <h1>404</h1>
        <h2>Oops! Trang bạn tìm không tồn tại.</h2>
        <p>Trang này có thể đã bị xóa hoặc bạn đã nhập sai địa chỉ.</p>
        <Button type="primary" onClick={() => navigate("/")}>
          Quay lại trang chủ
        </Button>
      </div>
    </div>
  );
};

export default Page404;
