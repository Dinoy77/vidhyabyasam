import React from 'react';
import ExamGuideLayout from '../pages/articles/ExamGuideLayout';

export default function ComedkGuide() {
  const data = {
    title: "COMEDK UGET",
    subtitle: "The pan-India gateway to Karnataka's top private engineering consortium.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    conductingBody: "Consortium of Medical, Engg & Dental Colleges",
    mode: "Computer Based Test (CBT)",
    eligibility: "10+2 with minimum 45% in PCM (Open to all Indians)",
    overview: "COMEDK UGET is a national-level entrance exam open to all Indian students. It is specifically designed to fill seats in over 150 private, unaided engineering colleges across Karnataka, which holds some of the country's best IT placement records.",
    highlights: ["Open to Non-Karnataka Students", "No Negative Marking", "180 Questions in 180 Minutes", "Higher Fee Structure than KCET", "Exceptional Bangalore IT Placements"],
    colleges: ["RV College of Engineering (RVCE)", "BMS College of Engineering", "Ramaiah Institute of Technology", "Dayananda Sagar College of Engineering"]
  };
  return <ExamGuideLayout data={data} />;
}