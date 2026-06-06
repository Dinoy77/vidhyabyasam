import React from 'react';
import ExamGuideLayout from '../pages/articles/ExamGuideLayout';

export default function GateGuide() {
  const data = {
    title: "GATE (Graduate Aptitude Test in Engineering)",
    subtitle: "The premier standard for postgraduate admissions and PSU recruitment in India.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
    conductingBody: "IISc & IITs (Rotational)",
    mode: "Computer Based Test (CBT)",
    eligibility: "Final year or completed Bachelor's Degree in Engineering/Tech",
    overview: "GATE comprehensively tests the candidate's core undergraduate engineering knowledge. A high GATE score provides direct entry into M.Tech/Ph.D. programs at premium institutes and serves as a direct hiring metric for prestigious Public Sector Undertakings (PSUs).",
    highlights: ["General Aptitude + Core Subject", "Numerical Answer Type (NAT) Questions", "Valid for 3 Years for Academics", "Heavy Emphasis on Core Engineering", "Allows Interdisciplinary Shift for PG"],
    colleges: ["Indian Institute of Science (IISc)", "All IITs & NITs for M.Tech", "PSUs (ONGC, BHEL, NTPC, ISRO)"]
  };
  return <ExamGuideLayout data={data} />;
}