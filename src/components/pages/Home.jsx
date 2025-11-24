import { CTA } from "../sections/CTA";
import { ExcellenceGallery } from "../sections/gallery";

export function Home() {
  return (
    <div className="home-content">
      <h2 className="home-title">Welcome to K2MoL Consulting</h2>
      <p className="home-description">
        K2MoL Consulting is a quantity surveying company established in 2017 with
        the aim to focus on infrastructure development and compete with a strong 
        national footprint. Our focus is to provide expertise in cost and project management.
      </p>
     <ExcellenceGallery />
      <CTA />
    </div>
  );
}