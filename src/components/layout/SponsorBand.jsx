import React from 'react';
import sponsor1 from '../../assets/images/sponsor/Association-of-South-African-Quantity-Surveyors-seminar.png';
import sponsor2 from '../../assets/images/sponsor/sacqsp_logo.png';


export function SponsorBand () {

  const sponsors = [
    { id: 1, logo: sponsor1, },
    { id: 2, logo: sponsor2, },
    
  ];

  return (
    <div className="sponsor-band">
      <div className="sponsor-container">
        <div className="sponsor-logos">
          {sponsors.map((sponsor) => (
            <a 
              key={sponsor.id} 
              href={sponsor.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="sponsor-link"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="sponsor-logo" 
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}