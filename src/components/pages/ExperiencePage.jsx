import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function ExperiencePage () {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="experience-page">
      <div className="experience-header">
        <h1>Our Experience</h1>
        <p>Explore our portfolio of work and client relationships</p>
      </div>

      <div className="experience-buttons">
        <div 
          className={`button-container ${hoveredButton === 'projects' ? 'hovered' : ''}`}
          onMouseEnter={() => setHoveredButton('projects')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <Link to="/projects" className="experience-button projects-button">
            View Projects
          </Link>
          <div className="button-description">
            <h3>Our Work Portfolio</h3>
            <p>See the innovative projects we've delivered for our clients</p>
          </div>
        </div>

        <div 
          className={`button-container ${hoveredButton === 'clients' ? 'hovered' : ''}`}
          onMouseEnter={() => setHoveredButton('clients')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <Link to="/clients" className="experience-button clients-button">
            View Clients
          </Link>
          <div className="button-description">
            <h3>Our Valued Clients</h3>
            <p>Discover the organizations that trust our services</p>
          </div>
        </div>
      </div>

      <div className="experience-content">
        <h2>Comprehensive Consaltancy Experience</h2>
        <p>
          With the our time in industry experience, we've developed a proven methodology 
          that delivers exceptional results for both projects and clients alike.
        </p>
      </div>
    </div>
  );
};
