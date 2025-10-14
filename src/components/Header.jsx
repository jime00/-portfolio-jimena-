import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <div style={{
          width:46, height:46, borderRadius:10, background:'#e182a0ff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, color:'#dd2aaaff'
        }}>JB</div>
        <div>
          <h1>Jimena Bello</h1>
          <p className="small-muted">Information Technology • Web Developer • Code </p>
        </div>
      </div>

      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#ai">AI</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}



