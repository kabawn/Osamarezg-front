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
import WorksOnPage from './components/WorksOnPage'; // Import the WorksOnPage component
import WorkDetail from './components/WorkDetail'; // Import the WorkDetail component
import Blog from './components/Blog';
import CastingPage from './components/CastingPage';
import ScriptSubmission from './components/ScriptSubmission'; // Import the ScriptSubmission component
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
