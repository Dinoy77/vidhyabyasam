import React from 'react';
import CourseGuideLayout from '../pages/articles/CourseGuideLayout';

export default function McaCourseGuide() {
  const data = {
    title: "MCA (Master of Computer Applications)",
    subtitle: "Advanced postgraduate engineering for computer application specialists.",
    duration: "2 Years (4 Semesters)",
    eligibility: "BCA / BSc in Computer Science or any graduate degree with Math at 10+2 level",
    salary: "₹5.0 - ₹14 LPA",
    overview: "The modern MCA is a highly advanced postgraduate program curated to meet the demands of global corporate technology ecosystems. It equips applications specialists with deep logical engineering and full-stack software knowledge.",
    highlights: ["Advanced MERN / Full-Stack", "Mobile App Architecture", "Cloud Infrastructure (AWS/GCP)", "Data Mining & Warehousing", "Enterprise Application Design"],
    careers: ["Senior Software Engineer", "Mobile Applications Architect", "DevOps Cloud Engineer", "Systems Analyst", "Project Team Lead"]
  };
  return <CourseGuideLayout data={data} />;
}