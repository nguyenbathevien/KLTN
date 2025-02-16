import HeroSection from "../../components/guest/HeroSection";
import PopularCategories from "../../components/guest/PopularCategories";
import FeaturedCourses from "../../components/guest/FeaturedCourses";
import WhyChooseUs from "../../components/guest/WhyChooseUs";
import Testimonials from "../../components/guest/Testimonials";

const HomePage = () => {
  return (
    <>
      {/* Hero Section: phần banner chính */}
      <HeroSection />

      {/* Popular Categories Section: các danh mục phổ biến */}
      <PopularCategories />

      {/* Featured Courses Section: các khóa học nổi bật */}
      <FeaturedCourses />

      {/* Why Choose Us Section: lý do chọn chúng tôi */}
      <WhyChooseUs />

      {/* Testimonials Section: phần đánh giá từ học viên */}
      <Testimonials />
    </>
  );
};

export default HomePage;
