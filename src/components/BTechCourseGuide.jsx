import React from 'react';
import CourseGuideLayout from '../pages/articles/CourseGuideLayout';

export default function BTechCourseGuide() {
  const data = {
    title: "B.Tech (Bachelor of Technology)",
    subtitle: "The ultimate undergraduate engineering path for technical innovators.",
    duration: "4 Years (8 Semesters)",
    eligibility: "10+2 with Physics, Chemistry & Math (PCM) + Entrance Exam",
    salary: "₹4.5 - ₹12 LPA",
    overview: "Bachelor of Technology (B.Tech) is a comprehensive professional undergraduate program specializing in various fields of engineering. It combines intensive theoretical engineering concepts with real-world laboratory experimentation and practical development.",
    highlights: ["Computer Science & Engineering", "Mechanical Engineering", "Electronics & Communication", "Data Structures & Algorithms", "Engineering Physics", "Core Project Laboratory Work"],
    careers: ["Software Engineer", "Systems Architect", "Automation Engineer", "Electronics Consultant", "R&D Scientist"]
  };
  return <CourseGuideLayout data={data} />;
}