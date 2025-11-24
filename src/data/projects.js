// projects-data.js
export const projects = [
  {
    id: 1,
    client: "ABSA",
    title: "Replacement cost for insurance purposes for ABSA different various clients",
    location: "Gauteng & Mpumalanga",
    category: "Insurance & Valuation",
    type: "Financial Services"
  },
  {
    id: 2,
    client: "Mvua Properties Partners",
    title: "Construction of the New Residential Development",
    location: "Camps Bay, Cape Town",
    category: "Construction",
    type: "Residential Development"
  },
  {
    id: 3,
    client: "Mzamasi Solutions",
    title: "Refurbishment of Ablutions to Soshanguve North Campus Building 51",
    location: "Soshanguve Campus for Tshwane University of Technology (TUT)",
    category: "Refurbishment",
    type: "Educational"
  },
  {
    id: 4,
    client: "Mokala International Engineers",
    title: "Refurbishment to 10 Chariott ST.",
    location: "Mowana Properties, Randburg",
    category: "Refurbishment",
    type: "Commercial"
  },
  {
    id: 5,
    client: "Mokala International Engineers",
    title: "Broll General Motors Civil & Structural Repair Works",
    location: "54 Maxwell Drive, Sandton",
    category: "Repair Works",
    type: "Commercial"
  },
  {
    id: 6,
    client: "Ditlou Consulting",
    title: "Preparation and reviewing of final accounts for the disputed projects",
    location: "Various",
    category: "Consulting",
    type: "Financial Services"
  },
  {
    id: 7,
    client: "Mvua Properties Partners",
    title: "Project audits for various clients and preparation of reports",
    location: "Various",
    category: "Auditing",
    type: "Professional Services"
  },
  {
    id: 8,
    client: "Talani Quantity Surveyors",
    title: "Construction of the New Lesotho Standards and Quality Infrastructure Building",
    location: "Ministry of Trade and Industry, Maseru Lesotho",
    category: "Construction",
    type: "Government"
  },
  {
    id: 9,
    client: "Dhahabu Consulting",
    title: "Completion of 200 Student Residentials",
    location: "Tshwane University of Technology (TUT), Ga-Rankuwa",
    category: "Construction",
    type: "Educational"
  },
  {
    id: 10,
    client: "VMQ Property Services",
    title: "Review and analysis of Imvelo Facilities Management maintenance budget over 25 years",
    location: "Various",
    category: "Property Management",
    type: "Professional Services"
  },
  {
    id: 11,
    client: "Talani Quantity Surveyors",
    title: "Sanitation Projects",
    location: "Mpumalanga Province",
    category: "Infrastructure",
    type: "Government"
  },
  {
    id: 12,
    client: "Live Construction",
    title: "Construction of a New Petrol Station",
    location: "Cofimvaba, Eastern Cape",
    category: "Construction",
    type: "Commercial"
  },
  {
    id: 13,
    client: "Dhahabu Consulting",
    title: "Technical contractual analysis of joint statements for submission to Dispute Adjudication board",
    location: "Housing Company Tshwane Properties",
    category: "Legal & Dispute Resolution",
    type: "Professional Services"
  },
  {
    id: 14,
    client: "VMQ Property Services",
    title: "Review, analysis and providing input on Tenant cost for the Middestad Building",
    location: "Pretoria",
    category: "Property Management",
    type: "Commercial"
  },
  {
    id: 15,
    client: "Stanley & Daphne Nkosi Foundation",
    title: "Linah Mashile Multi-purpose Centre",
    location: "Naledi, Soweto",
    category: "Construction",
    type: "Community Development"
  },
  {
    id: 16,
    client: "Department of Public Works, Roads & Transport",
    title: "Sanitation Projects",
    location: "Mpumalanga Province",
    category: "Infrastructure",
    type: "Government"
  },
  {
    id: 17,
    client: "Department of Public Works, Roads & Transport",
    title: "Preparations of bills of quantities for additional classrooms",
    location: "Various Primary & Secondary Schools around Mamelodi, Tshwane",
    category: "Infrastructure",
    type: "Educational"
  }
];

// Utility functions for styling
export const getCategoryColor = (category) => {
  const colors = {
    'Construction': 'bg-blue-100 text-blue-800',
    'Refurbishment': 'bg-green-100 text-green-800',
    'Insurance & Valuation': 'bg-purple-100 text-purple-800',
    'Consulting': 'bg-yellow-100 text-yellow-800',
    'Auditing': 'bg-red-100 text-red-800',
    'Property Management': 'bg-indigo-100 text-indigo-800',
    'Infrastructure': 'bg-gray-100 text-gray-800',
    'Legal & Dispute Resolution': 'bg-orange-100 text-orange-800',
    'Repair Works': 'bg-teal-100 text-teal-800'
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
};

export const getTypeColor = (type) => {
  const colors = {
    'Government': 'bg-blue-50 text-blue-600',
    'Educational': 'bg-green-50 text-green-600',
    'Commercial': 'bg-purple-50 text-purple-600',
    'Residential Development': 'bg-orange-50 text-orange-600',
    'Professional Services': 'bg-gray-50 text-gray-600',
    'Financial Services': 'bg-yellow-50 text-yellow-600',
    'Community Development': 'bg-pink-50 text-pink-600'
  };
  return colors[type] || 'bg-gray-50 text-gray-600';
};

export const getCategories = () => {
  return ['all', ...new Set(projects.map(p => p.category))];
};