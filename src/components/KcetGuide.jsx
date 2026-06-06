import React from 'react';
import ExamGuideLayout from '../pages/articles/ExamGuideLayout';

export default function KcetGuide() {
  const data = {
    title: "KCET (Karnataka Common Entrance Test)",
    subtitle: "The official route to government-share engineering seats in Karnataka.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
    conductingBody: "Karnataka Examination Authority (KEA)",
    mode: "Offline (Pen and Paper)",
    eligibility: "10+2 with PCM/B (Requires Karnataka Domicile)",
    overview: "KCET dictates admission into engineering, agriculture, and pharmacy courses in Karnataka. It offers highly subsidized tuition fees for local students entering both government and private colleges through the state quota.",
    highlights: ["No Negative Marking", "Biology/Math, Physics, Chemistry Papers", "Strict State Domicile Rules Apply", "State Syllabus Oriented", "Highly Subsidized Fee Structure"],
    colleges: ["RV College of Engineering (RVCE)", "BMS College of Engineering", "Ramaiah Institute of Technology", "PES University"]
  };
  return <ExamGuideLayout data={data} />;
}