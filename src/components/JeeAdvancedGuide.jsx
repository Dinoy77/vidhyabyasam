import React from 'react';
import ExamGuideLayout from '../pages/articles/ExamGuideLayout';

export default function JeeAdvancedGuide() {
  const data = {
    title: "JEE Advanced",
    subtitle: "The ultimate academic gauntlet for admission into the prestigious IITs.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80",
    conductingBody: "IITs (Rotational Basis)",
    mode: "Computer Based Test (CBT)",
    eligibility: "Top 2.5 Lakh rank holders in JEE Main",
    overview: "Considered one of the toughest examinations in the world, JEE Advanced is the exclusive ticket to the Indian Institutes of Technology (IITs). It tests deep analytical, comprehensive, and conceptual understanding of core sciences.",
    highlights: ["Two Mandatory Papers (Paper 1 & 2)", "Unpredictable Marking Scheme", "High-Level Conceptual Physics & Math", "Partial Marking Mechanisms", "Requires Intense Cognitive Endurance"],
    colleges: ["IIT Bombay", "IIT Madras", "IIT Delhi", "IIT Kanpur", "IIT Kharagpur", "IIT Roorkee"]
  };
  return <ExamGuideLayout data={data} />;
}