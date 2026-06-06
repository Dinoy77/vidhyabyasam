import React from 'react';
import ExamGuideLayout from '../pages/articles/ExamGuideLayout';

export default function KeamGuide() {
  const data = {
    title: "KEAM (Kerala Engineering Architecture Medical)",
    subtitle: "The centralized state entrance exam for elite institutions in Kerala.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80",
    conductingBody: "CEE Kerala",
    mode: "Computer Based Test (Transitioning)",
    eligibility: "10+2 with 45% in PCM (Kerala Domicile required for Govt seats)",
    overview: "KEAM is the primary gateway for students looking to secure engineering and pharmacy seats across government, aided, and private self-financing colleges within the state of Kerala. The rank list is prepared by giving equal weightage to the entrance score and 12th-grade board marks.",
    highlights: ["Paper 1: Physics & Chemistry", "Paper 2: Mathematics", "50:50 Weightage (Boards : Entrance)", "Highly Competitive State Quotas", "Gateway to Premium Kerala Institutes"],
    colleges: ["College of Engineering Trivandrum (CET)", "TKM College of Engineering, Kollam", "Government Engineering College, Thrissur", "Model Engineering College, Kochi"]
  };
  return <ExamGuideLayout data={data} />;
}