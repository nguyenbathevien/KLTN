import { motion } from "framer-motion";

// Animation variants for smoother transitions
const animationVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

// Usage in the Register component
const Register = () => {
  return (
    <div className="flex h-screen">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={animationVariants}
        transition={{ duration: 0.5 }} // Adjust duration for smoother effect
        className="hidden lg:block lg:w-1/2 h-screen"
      >
        {/* Left Side - Slider */}
        {/* Swiper component here */}
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={animationVariants}
        transition={{ duration: 0.5 }} // Adjust duration for smoother effect
        className="flex-1 flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8"
      >
        {/* Right Side - Registration Form */}
        {/* Registration form code here */}
      </motion.div>
    </div>
  );
};
