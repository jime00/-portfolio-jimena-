

import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const yourEmail = "belloji@kean.edu"; 

  function openMailClient(e) {
    e.preventDefault();

  
    const subject = `Portfolio contact from ${name || "a visitor"}`;
    const body = `Name: ${name || "N/A"}%0D%0AEmail: ${senderEmail || "N/A"}%0D%0A%0D%0A${encodeURIComponent(
      message || "(no message)"
    )}`;

   
    const mailtoLink = `mailto:${yourEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

  
    window.location.href = mailtoLink;
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Contact Me</h2>

      <form
        onSubmit={openMailClient}
        style={{
          display: "inline-block",
          textAlign: "left",
          maxWidth: 520,
          width: "100%",
          marginTop: 12,
        }}
      >
        <label style={{ display: "block", marginBottom: 8 }}>
          Your Name: 
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        <label style={{ display: "block", marginBottom: 8 }}>
          Your email:
          <input
            type="Email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            placeholder="you@example.com"
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        <label style={{ display: "block", marginBottom: 8 }}>
          Message:
          <textarea
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a short message..."
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button
            type="submit"
            style={{
              padding: "10px 14px",
              background: "#e46ba1ff",
              color: "white",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Open Mail App
          </button>

   
          <a
            href={`mailto:${yourEmail}`}
            style={{
              padding: "10px 14px",
              background: "#edc0c0ff",
              color: "#0b1220",
              textDecoration: "none",
              borderRadius: 8,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Email me
          </a>
        </div>

        <p style={{ color: "#666", marginTop: 10, fontSize: 13 }}>
          
        </p>
      </form>
    </div>
  );
}


