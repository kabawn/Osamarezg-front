import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Showreel from './components/Showreel';
import CenterMode from './components/CenterMode';
import Works from './components/Works';
import Testimonials from './components/Testimonials';
import Casting from './components/Casting';
import BlogPosts from './components/BlogPosts';
import Footer from './components/Footer';
import Director from './components/Director';
import WorksOnPage from './components/WorksOnPage';
import WorkDetail from './components/WorkDetail';
import Blog from './components/Blog';
import CastingPage from './components/CastingPage';
import ScriptSubmission from './components/ScriptSubmission';
import LoginPage from './components/LoginPage';
import AdminPage from './components/AdminPage';
import BlogDetails from './components/BlogDetails'; 
import ScrollToTop from './components/ScrollToTop';
import DirectorContact from './components/DirectorContact';
import ProtectedRoute from './components/ProtectedRoute'; 

import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Include the ScrollToTop component inside Router */}
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Showreel />
            <CenterMode />
            <Works />
            <BlogPosts />
            <Testimonials />
            <Casting />
          </>
        } />
        <Route path="/director" element={<Director />} />
        <Route path="/works" element={<WorksOnPage />} /> 
        <Route path="/works/:id" element={<WorkDetail />} /> 
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/casting" element={<CastingPage />} /> 
        <Route path="/submit-script" element={<ScriptSubmission />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        {/* Protect the admin route */}
        <Route path="/admin" element={<ProtectedRoute element={<AdminPage />} />} /> 
        <Route path="/blogs/:id" element={<BlogDetails />} /> 
        <Route path="/contact" element={<DirectorContact/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
