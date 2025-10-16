import React from 'react'

const demoProjects = [
  { title: 'Portfolio', desc: 'This site uses React and Vite, displays my contact information, projects.' },
  { title: 'Chatbot Demo', desc: 'AI assistant integrated via serverless function .' },
  { title: 'Game project', desc: 'Four games!' },
]

export default function Projects() {
  return (
    <section id="projects" className="card">
      <div className="section-title">Projects</div>

      <div className="projects-grid">
        {demoProjects.map((p, i) => (
          <div className="project" key={i}>
            <h3 style={{margin:'0 0 6px 0'}}>{p.title}</h3>
            <p className="small-muted" style={{margin:0}}>{p.desc}</p>
            <div style={{marginTop:10}}>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}



