import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const ParallaxPage = () => {
  return (
    <ParallaxProvider>
      <div className="parallax-container">
        <Parallax y={[-20, 20]}>
          <h1>Tech Recruiter → Junior Full Stack Dev</h1>
          <p>🎯 Aiming to break into tech in 2024. Can you help?</p>
        </Parallax>
        <Parallax y={[-30, 30]}>
          <p>Recent Full Stack Graduate from The Growth Company.</p>
          <p>Conversational Chinese speaker.</p>
        </Parallax>
        <Parallax y={[-40, 40]}>
          <p>Currently working on:</p>
          <p>Portfolio v1 (scheduled for release May '24) 🛠️</p>
        </Parallax>
        <Parallax y={[-50, 50]}>
          <p>Currently reading:</p>
          <p>Clean Code - Robert Cecil Martin 📖</p>
        </Parallax>
        <Parallax y={[-60, 60]}>
          <p>Technical Skills:</p>
          <ul>
            <li>Languages: HTML, CSS, JavaScript, React, Express.js, Node.js</li>
            <li>Design: Adobe Suite (Photoshop, Illustrator), Figma</li>
            <li>Databases: MongoDB, MySQL, SQL</li>
            <li>Version Control: Git (GitHub)</li>
            <li>Project Management: Agile, Monday.com, Asana, Trello</li>
            <li>CRM/ATS: Monday.com, HubSpot, Notion, Salesforce, Greenhouse, Workable</li>
          </ul>
        </Parallax>
        <Parallax y={[-70, 70]}>
          <p>Previously:</p>
          <ul>
            <li>Wiley Edge - Technical Recruiter</li>
            <li>Interactive Investor - Internal Recruiter</li>
            <li>Bo Le Associates - Technical Recruiter</li>
            <li>Sopra Steria - Recruitment Resourcer</li>
            <li>Edison Pope - Recruitment Resourcer</li>
            <li>ASP Group - Recruitment Resourcer</li>
          </ul>
        </Parallax>
        <Parallax y={[-80, 80]}>
          <p>reach out :)</p>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

export default ParallaxPage;
