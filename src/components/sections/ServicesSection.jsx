import React from 'react';
import { Calculator, Building, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';


export function ServicesSection() {

  const services = [
  {
    id: 0,
    icon: Calculator,
    title: "Cost Management",
    description: "Comprehensive cost planning and control throughout your project lifecycle.",
    features: ["Budget Planning", "Cost Estimation", "Value Engineering"]
  },
  {
    id: 1,
    icon: Building,
    title: "Project Management",
    description: "Expert project oversight ensuring timely delivery and quality outcomes.",
    features: ["Timeline Management", "Quality Control", "Risk Assessment"]
  },
  {
    id: 2,
    icon: Users,
    title: "Consulting Services",
    description: "Strategic advisory services to optimize your construction investments.",
    features: ["Strategic Planning", "Feasibility Studies", "Contract Advisory"]
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Commercial Management",
    description: "Maximize project value through expert commercial and contractual advice.",
    features: ["Contract Management", "Claims Management", "Commercial Strategy"]
  }
];

  const ServiceCard = React.memo(({ service }) => {
  const IconComponent = service.icon;
  return (
    <div className="service-card">
      <div className="service-icon">
        <IconComponent size={23} />
      </div>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <ul className="service-features">
        {service.features.map((feature, index) => (
          <li key={index}>
            <CheckCircle className="feature-icon" size={15} />
            {feature}
          </li>
        ))}
      </ul>
      
    </div>
  );
});

  return (
    <div className='service-page'>

        {/* Services Section */}
        <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive quantity surveying solutions designed to deliver exceptional value for your projects</p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}