import React from 'react';

export function AboutSection() {
  return (
    <div className="About-profile">
      {/* Header */}
      <div className="profile-header">
        <h2 className="section-title">ABOUT US</h2>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Decorative curved elements */}
        <div className="decorative-elements">
          <div className="decorative-circle-1"></div>
          <div className="decorative-circle-2"></div>
          <div className="decorative-circle-3"></div>
        </div>

        {/* About Us Section */}
        <div className="about-section">
          <div className="about-container">
          
            <div className="about-card">
              <p className="about-text">
                K2Mol Consulting is a quantity surveying company established in 2017 with the aim to focus on infrastructure development and the general building industry.
              </p>
              <p className="about-text">
                The firm was formed by a dynamic and competent individual within the cost and project management profession, who is driven by a challenge to meet client's needs.
              </p>
            </div>
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="vision-mission-section">
          <div className="vision-mission-overlay"></div>
          <div className="vision-mission-content">
            <div className="vision-mission-container">
              <div className="decorative-border"></div>
              
              <div className="vision-block">
                <h2 className="vision-mission-title">VISION</h2>
                <p className="vision-mission-text">
                  We want to compete with a strong national footprint, and to represent our client's interest in becoming one of the trusted leaders within the industry.
                </p>
              </div>

              <div>
                <h2 className="vision-mission-title">MISSION</h2>
                <p className="vision-mission-text">
                  Our focus is to provide expertise in cost and project management, while adhering to sound business principles and good ethics that earn the client's trust with the company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}