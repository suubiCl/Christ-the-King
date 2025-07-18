import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import CourseOutline from './pages/CourseOutline';
import Volunteer from './pages/Volunteer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course-outline" element={<CourseOutline />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;