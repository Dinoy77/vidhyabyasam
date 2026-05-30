import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CollegeDetail from './pages/CollegeDetail';
import NewsDetail from './pages/NewsDetail';
import WhatsAppButton from './components/WhatsAppButton';

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
          </Routes>
        </main>
         <WhatsAppButton />
      </AuthProvider>
    </BrowserRouter>
  );
}
