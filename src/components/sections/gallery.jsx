import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import your project images
import projectImg4 from '../../assets/images/gallery/IMG-20250620-WA0048.jpg';
import projectImg5 from '../../assets/images/gallery/pexels-miguel-castillo-24302532-31460017.jpg';
import projectImg6 from '../../assets/images/gallery/pexels-1433506698-33011845.jpg';

export function ExcellenceGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
   
    {
      id: 4,
      image: projectImg4,
      title: "Team Collaboration",
      description: "Working together to deliver exceptional construction solutions"
    },
    {
      id: 5,
      image: projectImg5,
      title: "Site Inspection & Analysis",
      description: "Thorough evaluation and monitoring of construction progress"
    },
    {
      id: 6,
      image: projectImg6,
      title: "Technical Review Process",
      description: "Detailed technical assessments ensuring project compliance"
    }
  ];

  const openLightbox = (index) => {
    setSelectedImage(galleryItems[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryItems.length 
      : (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(galleryItems[newIndex]);
  };

  return (
    <section className="excellence-gallery">
      <div className="container mx-auto px-4 py-16">
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-image-container">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <h3 className="gallery-item-title">{item.title}</h3>
                    <p className="gallery-item-description">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={24} />
            </button>
            
            <button 
              className="lightbox-nav lightbox-prev" 
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft size={32} />
            </button>
            
            <div className="lightbox-content">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="lightbox-image"
              />
              <div className="lightbox-info">
                <h3 className="lightbox-title">{selectedImage.title}</h3>
                <p className="lightbox-description">{selectedImage.description}</p>
              </div>
            </div>
            
            <button 
              className="lightbox-nav lightbox-next" 
              onClick={() => navigateImage('next')}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}