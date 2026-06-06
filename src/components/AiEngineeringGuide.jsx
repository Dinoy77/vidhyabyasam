import React from 'react';
import CourseGuideLayout from '../pages/articles/CourseGuideLayout';

export default function AiEngineeringGuide() {
  const data = {
    title: "Artificial Intelligence Engineering",
    subtitle: "Building the algorithms, intelligent neural structures, and machine engines of tomorrow.",
    duration: "4 Years (Specialized B.Tech)",
    eligibility: "10+2 with PCM (High percentage benchmarks) + Competitive Entrance Exams",
    salary: "₹7.0 - ₹22 LPA",
    overview: "This ultra-modern specialization focuses strictly on mathematical learning algorithms, algorithmic computer vision models, and natural language computing processing models.",
    highlights: ["Deep Learning & Artificial Neural Networks", "Computer Vision & Object Tracking", "Natural Language Processing (NLP)", "Reinforcement Learning Paradigms", "Robotic Process Automation"],
    careers: ["AI Research Scientist", "Computer Vision Engineer", "Machine Learning Specialist", "NLP Algorithm Developer", "Data Intelligence Architect"]
  };
  return <CourseGuideLayout data={data} />;
}