import FeaturedCourses from "../../../components/guest/Home/FeaturedCourses";
import HeroSection from "../../../components/guest/Home/HeroSection";
import PopularCategories from "../../../components/guest/Home/PopularCategories";
import Testimonials from "../../../components/guest/Home/Testimonials";
import WhyChooseUs from "../../../components/guest/Home/WhyChooseUs";

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
