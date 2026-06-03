import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CollegeDetail from './pages/CollegeDetail';
import NewsDetail from './pages/NewsDetail';
import WhatsAppButton from './components/WhatsAppButton';
import ChatBot from './components/ChatBot';

// Article Imports
import TopKeralaMedicalColleges from './pages/articles/TopKeralaMedicalColleges';
import TopTamilNaduMedicalColleges from './pages/articles/TopTamilNaduMedicalColleges';
import TopKarnatakaMedicalColleges from './pages/articles/TopKarnatakaMedicalColleges';
import TopIndianMedicalColleges from './pages/articles/TopIndianMedicalColleges';
import TopGovtMedicalColleges from './pages/articles/TopGovtMedicalColleges';
import MedicalCollegesKarnataka from './pages/articles/MedicalCollegesKarnataka';
import MedicalCollegesKerala from './pages/articles/MedicalCollegesKerala';
import MedicalCollegesTamilNadu from './pages/articles/MedicalCollegesTamilNadu';

// Course Guide Imports
import MbbsCourseGuide from './pages/articles/MbbsCourseGuide';
import BdsCourseGuide from './pages/articles/BdsCourseGuide';
import BamsCourseGuide from './pages/articles/BamsCourseGuide';
import BscNursingCourseGuide from './pages/articles/BscNursingCourseGuide';
import BPharmCourseGuide from './pages/articles/BPharmCourseGuide';

// Exam Guide Imports
import NeetUgGuide from './pages/articles/NeetUgGuide';
import NeetPgGuide from './pages/articles/NeetPgGuide';
import IniCetGuide from './pages/articles/IniCetGuide';
import FmgeGuide from './pages/articles/FmgeGuide';
import AiimsNursingGuide from './pages/articles/AiimsNursingGuide';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState('All Courses');
  const [courseSelectCount, setCourseSelectCount] = useState(0);

  return (
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
            
            {/* Top Colleges Routes */}
            <Route path="/articles/TopKeralaMedicalColleges" element={<TopKeralaMedicalColleges />} />
            <Route path="/articles/TopTamilNaduMedicalColleges" element={<TopTamilNaduMedicalColleges />} />
            <Route path="/articles/TopKarnatakaMedicalColleges" element={<TopKarnatakaMedicalColleges />} />            
            <Route path="/articles/TopIndianMedicalColleges" element={<TopIndianMedicalColleges />} />
            <Route path="/articles/TopGovtMedicalColleges" element={<TopGovtMedicalColleges />} />
            <Route path="/articles/MedicalCollegesKarnataka" element={<MedicalCollegesKarnataka />} />
            <Route path="/articles/MedicalCollegesKerala" element={<MedicalCollegesKerala />} />
            <Route path="/articles/MedicalCollegesTamilNadu" element={<MedicalCollegesTamilNadu />} />
            
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
          </Routes>
        </main>
        
        <WhatsAppButton />
        <ChatBot />
      </AuthProvider>
    </BrowserRouter>
  );
}