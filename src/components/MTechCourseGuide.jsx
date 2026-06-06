import React from 'react';
import CourseGuideLayout from '../pages/articles/CourseGuideLayout';

export default function MTechCourseGuide() {
  const data = {
    title: "M.Tech (Master of Technology)",
    subtitle: "Advanced postgraduate specialization for technical masters and researchers.",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.Tech / B.E. Degree + Valid GATE Score",
    salary: "₹6.5 - ₹18 LPA",
    overview: "Master of Technology (M.Tech) offers advanced specialization in state-of-the-art engineering specializations. This path emphasizes micro-specialized industrial design, high-level computational modeling, and research methodology.",
    highlights: ["Advanced Computing Architectures", "Machine Learning Topologies", "VLSI Systems Design", "Structural Dynamics", "Thesis Research & Defense"],
    careers: ["Senior Design Engineer", "Research Analyst", "Principal Technology Architect", "Technical Director", "Academician / Professor"]
  };
  return <CourseGuideLayout data={data} />;
}