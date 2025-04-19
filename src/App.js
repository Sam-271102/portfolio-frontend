import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', backgroundColor: '#222', color: '#fff' }}>
        <Link to="/" style={{ marginRight: '1rem', color: '#61dafb' }}>Home</Link>
        <Link to="/projects" style={{ marginRight: '1rem', color: '#61dafb' }}>Projects</Link>
        <Link to="/skills" style={{ marginRight: '1rem', color: '#61dafb' }}>Skills</Link>
        <Link to="/contact" style={{ color: '#61dafb' }}>Contact</Link>
      </nav>

      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
