import React from 'react';
import CourseGuideLayout from '../pages/articles/CourseGuideLayout';

export default function CyberSecurityEngineeringGuide() {
  const data = {
    title: "Cyber Security Engineering",
    subtitle: "Protecting critical computational networks and digital assets from global breach threats.",
    duration: "4 Years (Specialized B.Tech)",
    eligibility: "10+2 with PCM + National/State Technical Entrance Clearance",
    salary: "₹6.0 - ₹18 LPA",
    overview: "Cyber Security Engineering focuses on secure programming code, cryptography principles, network threat defense systems, and digital forensics methodologies.",
    highlights: ["Ethical Hacking & Network Penetration", "Advanced Cryptographic Protocols", "Cloud Assets Firewalls", "Malware Deep Analysis", "Incident Mitigation Tactics"],
    careers: ["Information Security Officer", "Certified Penetration Tester", "Digital Forensics Investigator", "Security Operations Center (SOC) Lead", "Cyber Cryptographer"]
  };
  return <CourseGuideLayout data={data} />;
}