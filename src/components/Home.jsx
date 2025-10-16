import React from 'react';
import codingImage from '../assets/coding.jpg'; // we'll add this next!

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Welcome to My Portfolio</h2>
      <p>I’m passionate about Information Technology and coding.</p>
      <img
        src={codingImage}
        alt="Coding background"
        style={{
          width: '80%',
          maxWidth: '600px',
          marginTop: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      />
    </div>
  );
}
