import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import NotificationBanner from './components/NotificationBanner';
import Home from './pages/Home';
import CollegeDetail from './pages/CollegeDetail';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState('All Courses');

  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar onCourseSelect={(course) => {
          setSelectedCourse(course);
          setTimeout(() => {
            document.getElementById('colleges')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }} />
        <NotificationBanner />
        <main style={{ paddingTop: '110px' }}>
          <Routes>
            <Route path="/" element={<Home selectedCourse={selectedCourse} />} />
            <Route path="/college/:id" element={<CollegeDetail />} />
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  );
}
