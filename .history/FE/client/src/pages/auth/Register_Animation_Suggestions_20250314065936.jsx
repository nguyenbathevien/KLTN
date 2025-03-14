import { motion } from "framer-motion";

// Animation variants for smoother transitions
const animationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

// Usage in the Register component
const Register = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animationVariants}
      transition={{ duration: 0.5 }} // Adjust duration for smoother effect
      className="flex h-screen"
    >
      {/* Rest of your Register component code */}
    </motion.div>
  );
};
