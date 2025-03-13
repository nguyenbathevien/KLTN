import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { FaEnvelope } from "react-icons/fa";

const Verify = () => {
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", ""]);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Chỉ cho phép số

    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    if (value && index < 4) {
      const nextInput = document.querySelector(
        `input[name="code-${index + 1}"]`
      );
      if (nextInput) nextInput.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/[^\d]/g, "")
      .slice(0, 5);
    const newCode = [...verificationCode];

    for (let i = 0; i < pastedData.length; i++) {
      if (i < 5) newCode[i] = pastedData[i];
    }

    setVerificationCode(newCode);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      const prevInput = document.querySelector(
        `input[name="code-${index - 1}"]`
      );
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = verificationCode.join("");

    if (code.length !== 5) {
      setError("Please enter the complete verification code");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/v1/email/verify",
        {
          code,
          email,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data) {
        navigate("/login", {
          state: { message: "Email verified successfully!" },
        });
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Verification failed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendCode = async () => {
    if (countdown > 0) return;

    try {
      await axios.post(
        "http://localhost:8080/v1/email/resend",
        {
          email,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setCountdown(30); // Bắt đầu đếm ngược 30 giây
      setError("");
    } catch (error) {
      setError("Failed to resend code. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
            <FaEnvelope className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Check your email</h2>
          <p className="mt-2 text-sm text-gray-600">
            We've sent a verification code to
          </p>
          <p className="mt-1 text-lg font-medium text-primary">{email}</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={Tôi sẽ kiểm tra và sửa lỗi đếm ngược cho nút gửi lại mã. Dưới đây là kế hoạch để sửa lỗi:

### Kế hoạch sửa lỗi
1. **Kiểm tra logic đếm ngược**: Đảm bảo rằng logic đếm ngược được thực hiện đúng cách.
2. **Cập nhật giao diện**: Đảm bảo rằng thời gian đếm ngược được hiển thị chính xác trên nút gửi lại mã.

### Các bước thực hiện
- Đọc nội dung tệp `Verify.jsx` để thực hiện các thay đổi.
- Thực hiện các thay đổi theo kế hoạch đã đề ra.
- Kiểm tra lại mã để đảm bảo mọi thứ hoạt động như mong đợi.

Bây giờ tôi sẽ tiến hành thay đổi mã trong tệp `Verify.jsx`.

<replace_in_file>
<path>src/pages/auth/Verify.jsx</path>
</replace_in_file>
