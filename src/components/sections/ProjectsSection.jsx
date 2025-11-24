export function ProjectsSection() {
  const projects = {
    commercial: [
      { name: "Liberty Life Properties Group", description: "New Five Storey Office Development with Basement, Century City", value: "R180,00 million" },
      { name: "Department of Public Works, Roads & Transport", description: "Construction of a New Nkangala In-Patient Treatment Centre, Delmas, Mpumalanga", value: "R134,00 million" },
      // Add ALL commercial projects from the PDF
    ],
    education: [
      { name: "University of Johannesburg", description: "Refurbishment and Additions to JHB, Sowero Campus", value: "R300,00 million" },
      { name: "National University of Lesotho Library Phase III", description: "Extensions to Existing and Construction of a New Double Storey Library Building, Maseru, Lesotho", value: "R14,00 million" },
      // Add ALL education projects from the PDF
    ],
    residentialLeisure: [
      { name: "University of Johannesburg", description: "Auckland Park Student Residences, Johannesburg", value: "R105,00 million" },
      { name: "University of Cape Town", description: "Construction of a Five Storey Graca Machel Women's Residence", value: "R85,00 million" },
      // Add ALL residential & leisure projects from the PDF
    ],
    retail: [
      { name: "Airport Company South Africa", description: "Construction of a Five Storey Multi Parkade Building, Cape Town", value: "R320 million" },
      { name: "Shoprite Centre", description: "Alterations and Additions to Existing Shoprite Centre, Kempton Park", value: "R25,00 million" },
      // Add ALL retail projects from the PDF
    ]
  };

  return (
    <section className="section projects-section">
      <h2>PROJECTS</h2>
      
      <div className="project-category">
        <h3>COMMERCIAL</h3>
        {projects.commercial.map((project, index) => (
          <div key={index} className="project">
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <p className="value">{project.value}</p>
          </div>
        ))}
      </div>
      
      <div className="project-category">
        <h3>EDUCATION</h3>
        {projects.education.map((project, index) => (
          <div key={index} className="project">
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <p className="value">{project.value}</p>
          </div>
        ))}
      </div>
      
      <div className="project-category">
        <h3>RESIDENTIAL & LEISURE</h3>
        {projects.residentialLeisure.map((project, index) => (
          <div key={index} className="project">
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <p className="value">{project.value}</p>
          </div>
        ))}
      </div>
      
      <div className="project-category">
        <h3>RETAIL</h3>
        {projects.retail.map((project, index) => (
          <div key={index} className="project">
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <p className="value">{project.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}