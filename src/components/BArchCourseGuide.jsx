import React from 'react';
import CourseGuideLayout from '../pages/articles/CourseGuideLayout';

export default function BArchCourseGuide() {
  const data = {
    title: "B.Arch (Bachelor of Architecture)",
    subtitle: "Fusing physical structural engineering with aesthetic spatial planning.",
    duration: "5 Years (10 Semesters)",
    eligibility: "10+2 with PCM (Minimum 50%) + Valid NATA Score",
    salary: "₹4.0 - ₹9.0 LPA",
    overview: "Bachelor of Architecture combines structural safety math with creative visual planning paradigms. The lengthy 5-year journey incorporates extensive physical studio work, environmental research, and real-world construction site blueprints.",
    highlights: ["Architectural Design Studio", "Building Construction & Materials", "Structural Engineering Analytics", "History of Architecture", "Landscape & Urban Planning Studies"],
    careers: ["Urban Planner", "Licensed Conservation Architect", "Interior Concept Designer", "Real Estate Project Consultant", "Building Inspector"]
  };
  return <CourseGuideLayout data={data} />;
}