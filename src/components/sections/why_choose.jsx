import React from 'react';
import { CheckCircle } from 'lucide-react';

export function WhyChooseUsSection() {

  return (
    
    <section className="why-choose-us">
        <div className="container mx-auto px-4">
            <h2>Why Choose Our Services</h2>
            <p className="subtitle">
              With years of experience in the construction industry, we deliver 
              professional, reliable, and cost-effective solutions.
            </p>
            
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>Expertise</h3>
                <p>
                  Professional quantity surveyors with extensive industry experience
                </p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3>Cost Effective</h3>
                <p>
                  Competitive pricing with transparent fee structures
                </p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3>Fast Delivery</h3>
                <p>
                  Quick turnaround times without compromising quality
                </p>
              </div>
            </div>
          </div>
        </section>
  );
}