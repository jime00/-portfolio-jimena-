import React, { useState } from 'react'

export default function Chatbot() {
  const [q, setQ] = useState('')
  const [history, setHistory] = useState([
    { from: 'bot', text: "Hi! I'm a demo AI. Ask me about your projects or resume." }
  ])

  function handleSend() {
    if (!q.trim()) return
    const userMsg = { from: 'you', text: q }
    setHistory(h => [...h, userMsg])
    // simple rule-based responses
    const lower = q.toLowerCase()
    let reply = "Sorry — I don't know that yet. Try asking 'suggest a project idea' or 'help with resume'."

    if (lower.includes('project idea')) {
      reply = "Try building a small weather app + notes feature — fetch weather API + allow users to save favorites."
    } else if (lower.includes('resume')) {
      reply = "Keep your resume 1 page, list skills at top, and use bullet points with results (numbers)."
    } else if (lower.includes('deploy')) {
      reply = "I recommend deploying to Vercel; connect your GitHub repo and deploy in one click."
    }

    setTimeout(() => {
      setHistory(h => [...h, { from: 'bot', text: reply }])
    }, 600) // simulate thinking
    setQ('')
  }

  return (
    <section id="ai" className="card" style={{display:'flex', flexDirection:'column', gap:12}}>
      <div className="section-title">AI Assistant (Demo)</div>

      <div style={{minHeight:80, maxHeight:260, overflowY:'auto', padding:8, border:'1px solid #eef6ff', borderRadius:8}}>
        {history.map((m, i) => (
          <div key={i} style={{marginBottom:8, textAlign: m.from === 'bot' ? 'left' : 'right'}}>
            <div style={{
              display:'inline-block',
              padding:'8px 10px',
              borderRadius:10,
              maxWidth:'80%',
              background: m.from === 'bot' ? '#f1f7ff' : '#e6f2ff'
            }}>
              <div style={{fontSize:14}}>{m.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{display:'flex', gap:8}}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ask the demo AI..." onKeyDown={(e)=>{ if(e.key==='Enter') handleSend() }} />
        <button className="primary" onClick={handleSend}>Send</button>
      </div>
      <p className="small-muted" style={{margin:0}}>This is a simulated AI for demo purposes. For a real chatbot, use the serverless option below.</p>
    </section>
  )
}
