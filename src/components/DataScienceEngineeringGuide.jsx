import React from 'react';
import CourseGuideLayout from '../pages/articles/CourseGuideLayout';

export default function DataScienceEngineeringGuide() {
  const data = {
    title: "Data Science Engineering",
    subtitle: "Converting massive structural global information landscapes into strategic insights.",
    duration: "4 Years (Specialized B.Tech)",
    eligibility: "10+2 with PCM + Competitive Engineering Entrance Scores",
    salary: "₹6.5 - ₹20 LPA",
    overview: "Data Science Engineering focuses on high-speed structural analysis platforms, probabilistic statistics algorithms, database querying, and data visual analytics systems.",
    highlights: ["Big Data Computing Technologies", "Statistical Analytics & Inference", "Predictive Trend Modeling", "Python / R Enterprise Architecture", "Data Pipeline Orchestration"],
    careers: ["Data Architect", "Big Data Engineer", "Business Intelligence Lead", "Statistical Modeling Consultant", "Machine Learning Engineer"]
  };
  return <CourseGuideLayout data={data} />;
}