import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/validator";

const LoginPage = () => {
  const { handleLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    handleLogin({
      loginName: data.email,
      password: data.password,
    });
    if (data.remember) {
      localStorage.setItem("email", data.email);
      localStorage.setItem("password", data.password);
      localStorage.setItem("remember", data.remember);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 bg-primary p-8 flex items-center justify-center"
      >
        <div className="max-w-md">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="Learning Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <h2 className="text-4xl font-bold text-white mt-8 mb-4">
            V-Learning Platform
          </h2>
          <p className="text-primary-foreground text-lg">
            Join our community of learners and expand your knowledge horizons.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 bg-card p-8 flex items-center justify-center"
      >
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Welcome Back</h2>
            <p className="mt-2 text-accent">Please sign in to continue</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <div className="relative">
                <FiMail className="absolute top-3 left-3 text-accent" />
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-10 py-2 border rounded-md focus:ring-2 focus:ring-primary outline-none"
                  placeholder="Email address"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-destructive text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <div className="relative">
                <FiLock className="absolute top-3 left-3 text-accent" />
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  className="w-full px-10 py-2 border rounded-md focus:ring-2 focus:ring-primary outline-none"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-3 text-accent"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-destructive text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register("remember")}
                  className="mr-2"
                />
                <span className="text-sm text-accent">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-primary hover:text-primary/80"
              >
                Forgot password?
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Sign In
            </motion.button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-muted"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card text-accent">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="flex items-center justify-center py-2 px-4 border rounded-md hover:bg-muted transition-colors"
              >
                <FcGoogle className="mr-2" />
                Google
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="flex items-center justify-center py-2 px-4 border rounded-md hover:bg-muted transition-colors"
              >
                <FaFacebook className="mr-2 text-blue-600" />
                Facebook
              </motion.button>
            </div>
          </form>

          <p className="text-center text-sm text-accent">
            Don&apos;t have an account?
            <button className="text-primary hover:text-primary/80 font-semibold">
              Sign Up
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
