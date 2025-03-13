import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Verify = () => {
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  // Xử lý input cho từng ô code
  const handleChange = (index, value) => {
    if (value.length > 1) return; // Chỉ cho phép 1 số trong mỗi ô

    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Tự động focus vào ô tiếp theo
    if (value && index < 5) {
      const nextInput = document.querySelector(
        `input[name="code-${index + 1}"]`
      );
      if (nextInput) nextInput.focus();
    }
  };

  // Xử lý khi paste code
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const newCode = [...verificationCode];

    for (let i = 0; i < pastedData.length; i++) {
      if (i < 6) newCode[i] = pastedData[i];
    }

    setVerificationCode(newCode);
  };

  // Xử lý keydown để xóa và di chuyển focus
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      const prevInput = document.querySelector(
        `input[name="code-${index - 1}"]`
      );
      if (prevInput) prevInput.focus();
    }
  };

  // Gửi code xác thực
  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = verificationCode.join("");

    if (code.length !== 6) {
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

  // Gửi lại code
  const handleResendCode = async () => {
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
      alert("Verification code has been resent to your email");
    } catch (error) {
      setError("Failed to resend code. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verify your email
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We've sent a verification code to{" "}
            <span className="font-medium text-[#E41E3F]">{email}</span>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-2">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                type="text"
                name={`code-${index}`}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-12 h-12 text-center text-lg border-2 rounded-lg focus:border-[#E41E3F] focus:outline-none"
                maxLength={1}
                pattern="\d*"
              />
            ))}
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#E41E3F] hover:bg-[#C41E3F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E41E3F]"
            >
              {isSubmitting ? "Verifying..." : "Verify Email"}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Didn't receive the code?{" "}
              <button
                type="button"
                onClick={handleResendCode}
                className="font-medium text-[#E41E3F] hover:text-[#C41E3F]"
              >
                Resend
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verify;
