
import { ClientsSection } from '../sections/ClientsSection';

export function ClientPage () {
  return (
    <div className="client-page">
        <div className="intro-section">
          <h2>Trusted by the best</h2>
          <p>
            For over a decade, we've had the privilege of working with innovative 
            companies across various industries. Here are some of the organizations 
            that trust our services.
          </p>
        </div>
        <ClientsSection />
    </div>
  );
};
