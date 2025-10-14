import React from 'react'

export default function About() {
  return (
    <section id="about" className="card">
      <div className="section-title">About Me</div>
      <p>
        Hi, I’m <strong>Jimena</strong>. I am a major in IT and I build web apps using JavaScript and React. I am in my junior year of college.
        I have enjoyment combining web development with small AI features. This portfolio shows the  projects i have worked on and an AI assistant demo.
      </p>

      <div style={{display:'flex', gap:12, marginTop:12}}>
        <div style={{flex:1}}>
          <h4 style={{margin:'6px 0'}}>Skills</h4>
          <ul className="small-muted" style={{margin:'6px 0 0 18px'}}>
            <li>HTML, CSS, JavaScript,Python</li>
            <li>React + Vite</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div style={{flex:1}}>
          <h4 style={{margin:'6px 0'}}>Education</h4>
          <p className="small-muted" style={{margin:'6px 0'}}>KEAN University — IT</p>
        </div>
      </div>
    </section>
  )
}







