


import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#b78eb2ff' }}>
      <h1 style={{ color: 'white' }}>My Portfolio</h1>
      <nav style={{ marginTop: '1rem' }}>
        <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 10px', color: 'white' }}>About</Link>
        <Link to="/projects" style={{ margin: '0 10px', color: 'white' }}>Projects</Link>
        <Link to="/contact" style={{ margin: '0 10px', color: 'white' }}>Contact</Link>
        <Link to="/chatbot" style={{ margin: '0 10px', color: 'white' }}>Chatbot</Link>
      </nav>
    </header>
  );
}


