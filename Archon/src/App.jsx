import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Projects from './Components/Projects';
import AboutUsPage from './Pages/AboutUsPage';
import BlogPage from './Pages/BlogPage';
import GalleryPage from './Pages/GalleryPage';
import ContactPage from './Pages/ContactPage';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Contact />
    </BrowserRouter>
  );
};

export default App;
