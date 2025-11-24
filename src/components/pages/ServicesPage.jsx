import { ServicesSection } from "../sections/ServicesSection";
import { WhyChooseUsSection } from "../sections/why_choose";
import { Excellencegallery } from "../sections/galery";

export function ServicePage() {
  return(
    <>
      <ServicesSection/>
      <Excellencegallery/>
      <WhyChooseUsSection/>
    </>
  );
}