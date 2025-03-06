import { useParams } from "react-router-dom";

import CourseSummary from "../../../components/guest/CourseDetail/CourseSummary";
import WhatYouWillLearn from "../../../components/guest/CourseDetail/WhatYouWillLearn";
import PreviewVideo from "../../../components/guest/CourseDetail/PreviewVideo";
import CourseContent from "../../../components/guest/CourseDetail/CourseContent";
import TeacherInformation from "../../../components/guest/CourseDetail/TeacherInformation";
import FQA from "../../../components/guest/CourseDetail/FQA";
import NeedHelp from "../../../components/guest/CourseDetail/NeedHelp";

// Dữ liệu mẫu cho chi tiết khóa học
const courseDetails = {
  id: 1,
  title: "Complete Web Development Bootcamp",
  instructor: "Sarah Johnson",
  price: 89.99,
  rating: 4.8,
  students: 15000,
  hours: 42,
  lessons: 148,
  level: "Beginner to Advanced",
  lastUpdated: "January 2024",
  description:
    "Master web development from scratch with this comprehensive bootcamp. Learn HTML, CSS, JavaScript, React, Node.js, and more.",
  image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
  topics: [
    "HTML5 & CSS3 Fundamentals",
    "JavaScript ES6+",
    "React.js",
    "Node.js & Express",
    "MongoDB",
    "REST APIs",
    "Authentication & Security",
    "Deployment & DevOps",
  ],
  requirements: [
    "Basic computer knowledge",
    "No prior programming experience needed",
    "Willingness to learn and practice",
  ],
};

const CourseDetailPage = () => {
  // Lấy tham số 'id' từ URL
  const { id } = useParams();

  console.log(id);

  // Dữ liệu câu hỏi thường gặp (FAQ)

  return (
    // Khung tổng quát của trang chi tiết khóa học
    <div className="min-h-screen bg-background">
      {/* Phần đầu trang với thông tin tóm tắt về khóa học */}
      <CourseSummary {...courseDetails} />

      {/* Phần chi tiết: Những gì bạn sẽ học (topics) và yêu cầu (requirements) */}
      <WhatYouWillLearn {...courseDetails} />

      {/* Phần preview video (nếu có) */}
      <PreviewVideo {...courseDetails} />

      {/* Nội dung khóa học: Liệt kê các chủ đề với thời lượng */}
      <CourseContent {...courseDetails} />

      {/* Thông tin giảng viên */}
      <TeacherInformation {...courseDetails} />

      {/* Phần FAQ (Frequently Asked Questions) */}
      <FQA />

      {/* Phần hỗ trợ (Need Help?) */}
      <NeedHelp />
    </div>
  );
};

export default CourseDetailPage;
