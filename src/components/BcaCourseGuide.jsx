import React from 'react';
import CourseGuideLayout from '../pages/articles/CourseGuideLayout';

export default function BcaCourseGuide() {
  const data = {
    title: "BCA (Bachelor of Computer Applications)",
    subtitle: "The foundational gateway into professional software engineering and computer networks.",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 from any recognized stream with basic Mathematics proficiency",
    salary: "₹3.0 - ₹7.0 LPA",
    overview: "BCA bridges foundational computer science syntax with modern application ecosystems. It emphasizes database paradigms, web design environments, core language syntax, and cloud concepts.",
    highlights: ["Object Oriented Programming", "Database Management Systems", "Web Application Infrastructure", "Software Engineering Concepts", "Data Communication & Networks"],
    careers: ["Full-Stack Web Developer", "Database Administrator", "System Support Analyst", "Software Quality Analyst", "UI/UX Designer"]
  };
  return <CourseGuideLayout data={data} />;
}