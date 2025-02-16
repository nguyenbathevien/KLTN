import { useState } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";
import Card from "./Card";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // 🛠 Điều hướng

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <img
        src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="relative z-20 flex items-center justify-center p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <Card>
          {/* Nút đóng sẽ điều hướng về trang chủ */}
          <button
            className="absolute top-4 right-4 text-blue-700 text-4xl font-bold hover:text-red-600 transition duration-200 animate-[pulse_0.7s_infinite]"
            onClick={() => navigate("/")}
          >
            ✖
          </button>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
            Log in to continue your learning journey
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                icon={<FaEnvelope />}
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                icon={<FaLock />}
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <a href="#" className="text-blue-600 font-bold">
                Forgot your password?
              </a>
            </div>
            <Button type="submit">Login</Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-700">
              Don't have an account?{" "}
              <a href="#" className="text-purple-600 font-bold underline">
                Sign up
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
