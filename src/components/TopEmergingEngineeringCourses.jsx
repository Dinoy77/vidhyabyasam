import React from 'react';
import CourseGuideLayout from '../pages/articles/CourseGuideLayout';

export default function TopEmergingEngineeringCourses() {
  const data = {
    title: "Top Emerging Engineering Courses",
    subtitle: "An overview of next-generation tech industries reshaping global development.",
    duration: "Variable (B.Tech / Specializations)",
    eligibility: "10+2 with PCM + Elite Engineering Tier Merit Rank",
    salary: "₹7.5 - ₹25 LPA",
    overview: "The global engineering horizon is changing rapidly. This collective index highlights the highest-growth technological verticals that are currently commanding extreme premiums in commercial venture capitalization and enterprise scaling.",
    highlights: ["Quantum Computing Paradigms", "Blockchain Infrastructure Design", "Internet of Things (IoT) Meshes", "Biomedical Engineering & Genomics", "Robotics and Mechatronics Systems"],
    careers: ["Quantum Algorithm Developer", "Smart Contract Architect", "IoT Edge Systems Engineer", "Robotics Automation Lead", "Bioinformatics Scientist"]
  };
  return <CourseGuideLayout data={data} />;
}