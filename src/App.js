import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UploadAnalyze from './pages/UploadAnalyze';
import PatientData from './files/data';
import Information from './files/information';
import ImageAI from './files/imageai';
import HospitalLocator from './files/HospitalLocator';
import ConectWithDoctor from './files/ConectWithDoctor' ;

// import Report from './files/Report';
// import Results from './pages/Results';
// import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div
      style={{
        height: '100vh', // Ensure the app takes up the full height of the viewport
        overflowY: 'auto', // Allow vertical scrolling if content exceeds viewport
        scrollBehavior: 'smooth', // Smooth scrolling effect
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload-analyze" element={<UploadAnalyze />} />
        <Route path="/information/:userId" element={<Information />} />
        {/* <Route path="/report" element={<Report />} /> */}
        <Route path="/patient-data" element={<PatientData />} />
        <Route path="/imageai" element={<ImageAI />} />
        <Route path="/HospitalLocator" element={<HospitalLocator />} />
        <Route path="/ConectWithDoctor" element={<ConectWithDoctor />} />
        {/* <Route path="/results" element={<Results />} />
        <Route path="/contact-us" element={<ContactUs />} /> */}
      </Routes>
    </div>
    
  );
}

export default App;
