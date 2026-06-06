import React from 'react';
import ExamGuideLayout from '../pages/articles/ExamGuideLayout';

export default function JeeMainGuide() {
  const data = {
    title: "JEE Main (Joint Entrance Examination)",
    subtitle: "The primary national-level gateway for undergraduate engineering admissions in India.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    conductingBody: "National Testing Agency (NTA)",
    mode: "Computer Based Test (CBT)",
    eligibility: "10+2 with Physics, Chemistry & Math",
    overview: "JEE Main is India's most prominent engineering entrance exam. It serves as the qualifying test for admission to premium centrally funded technical institutions and is the mandatory screening phase for JEE Advanced.",
    highlights: ["Multiple Choice & Numerical Value Questions", "Negative Marking Applies", "Subjects: Physics, Chemistry, Math", "Conducted Multiple Times a Year", "Paper 1 (B.Tech) & Paper 2 (B.Arch)"],
    colleges: ["National Institutes of Technology (NITs)", "Indian Institutes of Information Technology (IIITs)", "Centrally Funded Technical Institutes (CFTIs)", "Delhi Technological University (DTU)"]
  };
  return <ExamGuideLayout data={data} />;
}