import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  // Fake data cho phần đánh giá từ học viên
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "This platform transformed my career. The courses are exceptional and the instructors are top-notch.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    {
      id: 2,
      name: "Lisa Brown",
      text: "I learned more in 3 months here than I did in my entire college education. Highly recommended!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  ];

  return (
    <>
      {/* Testimonials Section */}
      <div className="bg-secondary dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            What Our Students Say
          </h2>
          <div className="max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card dark:bg-gray-700 p-8 rounded-lg shadow-sm mb-8"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg dark:text-white">
                      {testimonial.name}
                    </h3>
                    <div className="flex text-chart-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-accent dark:text-gray-300">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
