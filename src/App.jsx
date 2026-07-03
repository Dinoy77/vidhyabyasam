import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CollegeDetail from './pages/CollegeDetail';
import NewsDetail from './pages/NewsDetail';
import WhatsAppButton from './components/WhatsAppButton';
import ChatBot from './components/ChatBot';
import ScrollToTop from './components/ScrollToTop';

// Article Imports (Static)
import TopKeralaMedicalColleges from './pages/articles/TopKeralaMedicalColleges';
import TopTamilNaduMedicalColleges from './pages/articles/TopTamilNaduMedicalColleges';
import TopKarnatakaMedicalColleges from './pages/articles/TopKarnatakaMedicalColleges';
import TopIndianMedicalColleges from './pages/articles/TopIndianMedicalColleges';
import TopGovtMedicalColleges from './pages/articles/TopGovtMedicalColleges';
import TopIndianEngineeringColleges from './pages/articles/TopIndianEngineeringColleges';
import EngineeringCollegesKerala from './pages/articles/EngineeringCollegesKerala';
import EngineeringCollegesTamilNadu from './pages/articles/EngineeringCollegesTamilNadu';
import EngineeringCollegesKarnataka from './pages/articles/EngineeringCollegesKarnataka';
import TopPrivateMedicalColleges from './pages/articles/TopPrivateMedicalColleges';
import BestCSEngineeringColleges from './pages/articles/BestCSEngineeringColleges';

// --- NEW: Unified Layout for All Colleges ---
import UniversalCollegesLayout from './pages/articles/UniversalCollegesLayout';

// Course Guide Imports
import MbbsCourseGuide from './pages/articles/MbbsCourseGuide';
import BdsCourseGuide from './pages/articles/BdsCourseGuide';
import BamsCourseGuide from './pages/articles/BamsCourseGuide';
import BscNursingCourseGuide from './pages/articles/BscNursingCourseGuide';
import BPharmCourseGuide from './pages/articles/BPharmCourseGuide';

import BTechCourseGuide from './components/BTechCourseGuide';
import MTechCourseGuide from './components/MTechCourseGuide';
import BcaCourseGuide from './components/BcaCourseGuide';
import McaCourseGuide from './components/McaCourseGuide';
import BArchCourseGuide from './components/BArchCourseGuide';
import AiEngineeringGuide from './components/AiEngineeringGuide';
import DataScienceEngineeringGuide from './components/DataScienceEngineeringGuide';
import CyberSecurityEngineeringGuide from './components/CyberSecurityEngineeringGuide';
import TopEmergingEngineeringCourses from './components/TopEmergingEngineeringCourses';

// Exam Guide Imports.
import NeetUgGuide from './pages/articles/NeetUgGuide';
import NeetPgGuide from './pages/articles/NeetPgGuide';
import IniCetGuide from './pages/articles/IniCetGuide';
import FmgeGuide from './pages/articles/FmgeGuide';
import AiimsNursingGuide from './pages/articles/AiimsNursingGuide';
import CollegesNearAirports from './pages/articles/CollegesNearAirports';
import CourseGuideLayout from './pages/articles/CourseGuideLayout';

import JeeMainGuide from './components/JeeMainGuide';
import JeeAdvancedGuide from './components/JeeAdvancedGuide';
import GateGuide from './components/GateGuide';
import KeamGuide from './components/KeamGuide';
import KcetGuide from './components/KcetGuide';
import ComedkGuide from './components/ComedkGuide';

import BlogArticle from './pages/BlogArticle';
import BlogList from './pages/BlogList';

import EducationLoanDetails from './pages/articles/EducationLoanDetails';
import GeneralEnquiry from './pages/GeneralEnquiry';

// Array of all dynamic routes configured in collegePageData.js
const dynamicCollegeRoutes = [
  // --- NURSING ---
  "TopNursingSouthIndia", "TopGovtNursingColleges", "TopPrivateNursingSouthIndia",
  "NursingCollegesKerala", "NursingCollegesKarnataka", "NursingCollegesTamilNadu", 
  "NursingCollegesKochi", "NursingCollegesTrivandrum", "NursingCollegesCalicut",
  "NursingCollegesBangalore", "NursingCollegesMysore", "NursingCollegesMangalore",
  "NursingCollegesChennai", "NursingCollegesCoimbatore", "NursingCollegesSalem",
  
  // --- MEDICAL ---
  "MedicalCollegesBangalore", "MedicalCollegesMysore", "MedicalCollegesMangalore",
  "MedicalCollegesKochi", "MedicalCollegesTrivandrum", "MedicalCollegesCalicut",
  "MedicalCollegesChennai", "MedicalCollegesCoimbatore", "MedicalCollegesSalem",
  
  // --- ENGINEERING ---
  "EngineeringCollegesBangalore", "EngineeringCollegesMysore", "EngineeringCollegesMangalore",
  "EngineeringCollegesKochi", "EngineeringCollegesTrivandrum", "EngineeringCollegesCalicut",
  "EngineeringCollegesChennai", "EngineeringCollegesCoimbatore", "EngineeringCollegesSalem"
];

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState('All Courses');
  const [courseSelectCount, setCourseSelectCount] = useState(0);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <Navbar onCourseSelect={(course) => {
            setSelectedCourse(course);
            setCourseSelectCount(c => c + 1);
            setTimeout(() => {
              document.getElementById('colleges')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }} />

          <main style={{ paddingTop: '60px' }}>
            <Routes>
              <Route path="/" element={<Home selectedCourse={selectedCourse} courseSelectCount={courseSelectCount} />} />
              <Route path="/college/:id" element={<CollegeDetail />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              
              {/* Top Colleges Routes (Static Legacy) */}
              <Route path="/articles/TopKeralaMedicalColleges" element={<TopKeralaMedicalColleges />} />
              <Route path="/articles/TopTamilNaduMedicalColleges" element={<TopTamilNaduMedicalColleges />} />
              <Route path="/articles/TopKarnatakaMedicalColleges" element={<TopKarnatakaMedicalColleges />} />            
              <Route path="/articles/TopIndianMedicalColleges" element={<TopIndianMedicalColleges />} />
              <Route path="/articles/TopGovtMedicalColleges" element={<TopGovtMedicalColleges />} />
              <Route path="/articles/TopIndianEngineeringColleges" element={<TopIndianEngineeringColleges />} />
              <Route path="/articles/EngineeringCollegesKerala" element={<EngineeringCollegesKerala />} />
              <Route path="/articles/EngineeringCollegesTamilNadu" element={<EngineeringCollegesTamilNadu />} />
              <Route path="/articles/EngineeringCollegesKarnataka" element={<EngineeringCollegesKarnataka />} />
              <Route path="/articles/TopPrivateMedicalColleges" element={<TopPrivateMedicalColleges />} />
              <Route path="/articles/BestCSEngineeringColleges" element={<BestCSEngineeringColleges />} />

              {/* --- NEW: Dynamic Universal Routes Mapped Here --- */}
              {dynamicCollegeRoutes.map(pathKey => (
                <Route 
                  key={pathKey} 
                  path={`/articles/${pathKey}`} 
                  element={<UniversalCollegesLayout pageKey={pathKey} />} 
                />
              ))}

              {/* Course Guide Routes */}
              <Route path="/articles/MbbsCourseGuide" element={<MbbsCourseGuide />} />
              <Route path="/articles/BdsCourseGuide" element={<BdsCourseGuide />} />
              <Route path="/articles/BamsCourseGuide" element={<BamsCourseGuide />} />
              <Route path="/articles/BscNursingCourseGuide" element={<BscNursingCourseGuide />} />
              <Route path="/articles/BPharmCourseGuide" element={<BPharmCourseGuide />} />

              {/* Exam Guide Routes */}
              <Route path="/articles/NeetUgGuide" element={<NeetUgGuide />} />
              <Route path="/articles/NeetPgGuide" element={<NeetPgGuide />} />
              <Route path="/articles/IniCetGuide" element={<IniCetGuide />} />
              <Route path="/articles/FmgeGuide" element={<FmgeGuide />} />
              <Route path="/articles/AiimsNursingGuide" element={<AiimsNursingGuide />} />

              <Route path="/articles/JeeMainGuide" element={<JeeMainGuide />} />
              <Route path="/articles/JeeAdvancedGuide" element={<JeeAdvancedGuide />} />
              <Route path="/articles/GateGuide" element={<GateGuide />} />
              <Route path="/articles/KeamGuide" element={<KeamGuide />} />
              <Route path="/articles/KcetGuide" element={<KcetGuide />} />
              <Route path="/articles/ComedkGuide" element={<ComedkGuide />} />

              {/* Engineering & IT Course Guide Routes */}
              <Route path="/articles/BTechCourseGuide" element={<BTechCourseGuide />} />
              <Route path="/articles/MTechCourseGuide" element={<MTechCourseGuide />} />
              <Route path="/articles/BcaCourseGuide" element={<BcaCourseGuide />} />
              <Route path="/articles/McaCourseGuide" element={<McaCourseGuide />} />
              <Route path="/articles/BArchCourseGuide" element={<BArchCourseGuide />} />
              <Route path="/articles/AiEngineeringGuide" element={<AiEngineeringGuide />} />
              <Route path="/articles/DataScienceEngineeringGuide" element={<DataScienceEngineeringGuide />} />
              <Route path="/articles/CyberSecurityEngineeringGuide" element={<CyberSecurityEngineeringGuide />} />
              <Route path="/articles/TopEmergingEngineeringCourses" element={<TopEmergingEngineeringCourses />} />

              <Route path="/articles/CollegesNearAirports" element={<CollegesNearAirports />} />
              <Route path='/articles/EducationLoanDetail' element={<EducationLoanDetails/>} />

              {/* Blogs Routes */}
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/GeneralEnquiry" element={<GeneralEnquiry/>} />
            </Routes>
          </main>
          
          <WhatsAppButton />
          <ChatBot />
          <ScrollToTop />
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}