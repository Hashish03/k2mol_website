import React from 'react';
import clientsData from '../../data/clientsData';

export function ClientsSection ()  {
  return (
    <section className="clients-section">
      <div className="clients-container">
        <h2 className="clients-title">Our Clients</h2>
        
        <div className="clients-grid">
          {clientsData.map((client) => (
            <div 
              key={client.id}
              className="client-card"
            >
              <a 
                href={client.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="client-link"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="client-logo"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
