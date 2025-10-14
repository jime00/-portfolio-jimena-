




// /Users/jime/portfolio/my-portfolio/src/App.jsx

// Remove this line:
// import React from 'react'; 

import Header from './components/Header.jsx';
import Projects from './components/Project.jsx';
import About from './components/about.jsx';
import Chatbot from './components/chatbot.jsx';
import Contact from './components/Contact.jsx';




// ... any other imports







export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Projects />
        <Chatbot />
        <Contact />
      </main>
      <footer style={{textAlign:'center', padding:'2rem 0', color:'#777'}}>
        © {new Date().getFullYear()} — Jimena's Portfolio 

      </footer>
    </div>
  )
}




