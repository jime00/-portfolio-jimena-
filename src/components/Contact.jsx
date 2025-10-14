import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setSent(true)
    setName(''); setEmail(''); setMsg('')
    setTimeout(()=>setSent(false), 3000)
  }

  return (
    <section id="contact" className="card">
      <div className="section-title">Contact:    
        Jimena Bello - belloji@kean.edu 
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Please enter your name:
          <input type="text" value={name} onChange={e=>setName(e.target.value)} required />
        </label>
        <div style={{height:8}} />
        <label>
          Please enter your email:
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)} required />
        </label>
        <div style={{height:8}} />
        <label>
          Feel free to contact me! : 
          <textarea rows="4" value={msg} onChange={e=>setMsg(e.target.value)} required />
        </label>
        <div style={{height:8}} />
        <button className="primary" type="submit">Send message</button>
        {sent && <p className="small-muted" style={{marginTop:10}}>Thanks — message sent!!! (demo).</p>}
      </form>
    </section>
  )
}




