// src/App.js
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
import './index.css';

function App() {
  return (
    <Router>
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
        <Route path="/admin" element={<AdminPage />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
