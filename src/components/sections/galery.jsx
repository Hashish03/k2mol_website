import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import your project images
import projectImg1 from '../../assets/images/gallery/IMG-20250620-WA0035.jpg';
import projectImg2 from '../../assets/images/gallery/pexels-ron-lach-10365934.jpg';
import projectImg3 from '../../assets/images/gallery/IMG-20250620-WA0036.jpg';

export function Excellencegallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      image: projectImg1,
      title: "Excellence in Project Management",
      description: "Leading complex construction projects with precision and expertise"
    },
    {
      id: 2,
      image: projectImg2,
      title: "Quality Surveying Solutions",
      description: "Accurate measurements and cost assessments for optimal project outcomes"
    },
    {
      id: 3,
      image: projectImg3,
      title: "Construction Oversight",
      description: "Comprehensive site supervision ensuring quality standards"
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