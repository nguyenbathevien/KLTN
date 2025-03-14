import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaCreditCard, FaPaypal, FaLock, FaShieldAlt } from "react-icons/fa";
import { checkoutSchema } from "../../utils/validator";

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });

  const courseData = {
    title: "Advanced Web Development Masterclass",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    price: 99.99,
    discount: 20,
    finalPrice: 79.99,
  };

  const onSubmit = (data) => {
    console.log(data);
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-lg shadow-sm p-6 md:p-8"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-heading font-heading text-foreground">
              Checkout
            </h1>
            <div className="flex items-center space-x-2 text-accent">
              <FaLock />
              <span className="text-sm">Secure Checkout</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-muted rounded-lg p-4 mb-6">
                <img
                  src={courseData.image}
                  alt={courseData.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="font-heading text-lg mb-2">
                  {courseData.title}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-accent line-through">
                    ${courseData.price}
                  </span>
                  <span className="text-primary font-bold">
                    ${courseData.finalPrice}
                  </span>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span>Course Price</span>
                  <span>${courseData.price}</span>
                </div>
                <div className="flex justify-between mb-2 text-destructive">
                  <span>Discount</span>
                  <span>-${courseData.discount}</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t border-border">
                  <span>Total</span>
                  <span>${courseData.finalPrice}</span>
                </div>
              </div>
            </div>

            <div>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.form
                    key="personal-info"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          First Name
                        </label>
                        <input
                          {...register("firstName")}
                          className="w-full px-3 py-2 border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                        {errors.firstName && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-destructive text-sm mt-1"
                          >
                            {errors.firstName.message}
                          </motion.p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Last Name
                        </label>
                        <input
                          {...register("lastName")}
                          className="w-full px-3 py-2 border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                        {errors.lastName && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-destructive text-sm mt-1"
                          >
                            {errors.lastName.message}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full px-3 py-2 border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-destructive text-sm mt-1"
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Phone (Optional)
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="w-full px-3 py-2 border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                      {errors.phone && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-destructive text-sm mt-1"
                        >
                          {errors.phone.message}
                        </motion.p>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-primary text-primary-foreground py-2 rounded-sm font-medium"
                    >
                      Continue to Payment
                    </motion.button>
                  </motion.form>
                )}

                {step === 2 && (
                  <motion.div
                    key="payment-method"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`p-4 border rounded-sm cursor-pointer ${
                          paymentMethod === "card"
                            ? "border-ring"
                            : "border-input"
                        }`}
                        onClick={() => setPaymentMethod("card")}
                      >
                        <div className="flex items-center space-x-3">
                          <FaCreditCard className="text-xl" />
                          <span>Credit/Debit Card</span>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`p-4 border rounded-sm cursor-pointer ${
                          paymentMethod === "paypal"
                            ? "border-ring"
                            : "border-input"
                        }`}
                        onClick={() => setPaymentMethod("paypal")}
                      >
                        <div className="flex items-center space-x-3">
                          <FaPaypal className="text-xl" />
                          <span>PayPal</span>
                        </div>
                      </motion.div>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-primary text-primary-foreground py-2 rounded-sm font-medium"
                      >
                        Complete Purchase
                      </motion.button>

                      <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-accent">
                        <FaShieldAlt />
                        <span>Your payment info is secure</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutPage;
