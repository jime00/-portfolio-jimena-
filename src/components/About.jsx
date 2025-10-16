


import React from "react";
import keanImage from "../assets/kean.jpg"; 
import codingImage from "../assets/codes.jpg"; 

export default function About() {
 
  return (
    <section id="about" className="card" style={{ textAlign: "center" }}>
      <div className="section-title">About Me</div>

      <p style={{ maxWidth: 600, margin: "0 auto 1rem" }}>
        Hi, I’m <strong>Jimena</strong>. I’m majoring in IT and currently in my
        junior year at <strong>Kean University</strong>. I enjoy combining web
        development with small AI features. This portfolio shows the projects
        I’ve worked on and an AI assistant demo.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
          marginBottom: "1.5rem",
        }}
      >
        <img
          src={keanImage}
          alt="Kean University"
          style={{
            width: "280px",
            borderRadius: "10px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        />
        <img
          src={codingImage}
          alt="Coding Languages"
          style={{
            width: "280px",
            borderRadius: "10px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 200px", minWidth: 220 }}>
          <h4 style={{ margin: "6px 0" }}>Education</h4>
          <ul
            className="small-muted"
            style={{ margin: "6px 0 0 18px", textAlign: "left" }}
          >Kean University — B.S Information Technology
           
          </ul>
        </div>

        <div style={{ flex: "1 1 200px", minWidth: 220 }}>
          <h4 style={{ margin: "6px 0" }}>Skills</h4>
          <p className="small-muted" style={{ margin: "6px 0" }}>
            

            <li>HTML, CSS, JavaScript, Python</li>
            <li>React + Vite</li>
            <li>Node.js</li>




          </p>
        </div>
      </div>
    </section>
  );
}


