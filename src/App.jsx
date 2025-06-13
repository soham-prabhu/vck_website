import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './Pages/HomePage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import CoursesPage from "./Pages/CoursesPage.jsx";

import ContactPage from './Pages/ContactPage.jsx';
import AdmissionPage from './Pages/AdmissionPage.jsx';
import NotFoundPage from './Pages/NotFoundPage.jsx';

// Components
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import './App.css';
import ChatbotComponent from './components/Chatbot/ChatbotComponents.jsx';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup.jsx';
import Myimg from './assets/WhatsApp Image 2025-06-13 at 16.48.01_dd2b765f.jpg'


function App() {
 
 
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Soham prabhu"
          studentPhotoUrl="src\assets\Screenshot 2025-06-13 165827.png" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <BrowserRouter>
      <div className="main-layout">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admissions" element={<AdmissionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ChatbotComponent></ChatbotComponent>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    </>
  );
  
}
//s

export default App;
