import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { X, ChevronLeft, ChevronRight, Camera, Users, Award, BookOpen, Image } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const navigate = useNavigate();

  const galleryImages = [
    // All gallery images - clean and simple
    { src: '/gallery/471118833_1109661280544820_2760270409712801570_n.jpg' },
    { src: '/gallery/472578312_1120525676125047_4605457454840032170_n.jpg' },
    { src: '/gallery/89777759_139868067524151_5580944709888507904_n.jpg' },
    { src: '/gallery/WhatsApp Image 2025-07-04 at 6.31.00 PM.jpeg' },
    { src: '/gallery/WhatsApp Image 2025-07-04 at 6.31.01 PM (1).jpeg' },
    { src: '/gallery/WhatsApp Image 2025-07-04 at 6.31.01 PM.jpeg' },
    { src: '/gallery/WhatsApp Image 2025-07-04 at 6.31.02 PM (1).jpeg' },
    { src: '/gallery/WhatsApp Image 2025-07-04 at 6.31.02 PM.jpeg' },
    { src: '/gallery/WhatsApp Image 2025-07-04 at 6.31.03 PM.jpeg' },
    { src: '/gallery/WhatsApp Image 2025-07-04 at 6.31.04 PM (1).jpeg' },
    { src: '/gallery/WhatsApp Image 2025-07-04 at 6.31.04 PM.jpeg' },
    { src: '/gallery/WhatsApp Image 2025-07-04 at 6.31.07 PM (1).jpeg' },
    { src: '/gallery/WhatsApp Image 2025-07-04 at 6.31.07 PM.jpeg' },
    { src: '/gallery/WhatsApp Image 2025-07-04 at 6.31.08 PM (1).jpeg' },
    { src: '/gallery/WhatsApp Image 2025-07-04 at 6.31.08 PM (2).jpeg' },
    { src: '/gallery/WhatsApp Image 2025-07-04 at 6.31.08 PM.jpeg' },
    { src: '/gallery/IMG_1082.JPG' },
    { src: '/gallery/IMG_1087.JPG' },
    { src: '/gallery/IMG_1088.JPG' },
    { src: '/gallery/IMG_1089.JPG' },
    { src: '/gallery/IMG_1090.JPG' },
    { src: '/gallery/IMG_1091.JPG' },
    { src: '/gallery/IMG_1092.JPG' },
    { src: '/gallery/IMG_1093.JPG' },
    { src: '/gallery/IMG_1094.JPG' },
    { src: '/gallery/IMG_1095.JPG' },
    { src: '/gallery/IMG_1096.JPG' },
    { src: '/gallery/IMG_1097.JPG' },
    { src: '/gallery/IMG_1098.JPG' },
    { src: '/gallery/IMG_1099.JPG' },
    { src: '/gallery/IMG_1100.JPG' },
    { src: '/gallery/IMG_1101.JPG' }
  ];



  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const highlights = [
    {
      icon: Users,
      title: 'Student Life',
      description: 'Vibrant campus community with diverse learning experiences and friendships'
    },
    {
      icon: BookOpen,
      title: 'Learning & Teaching',
      description: 'Innovative teaching methods and hands-on practical training sessions'
    },
    {
      icon: Award,
      title: 'Celebrations & Events',
      description: 'Celebrating achievements, milestones, and cultural activities'
    },
    {
      icon: Camera,
      title: 'Community Outreach',
      description: 'Engaging with local communities and making a positive impact'
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <PageHeader
        title="Gallery"
        subtitle="Explore life at Christ the King Nursery Teachers' College through our photo gallery"
        backgroundImage="/472578312_1120525676125047_4605457454840032170_n.jpg"
        icon={<Image className="h-10 w-10 text-white" />}
      />

      {/* Gallery Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">Campus Life Highlights</h2>
            <p className="text-xl text-gray-600">Discover what makes our college community special</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="bg-indigo-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">{highlight.title}</h3>
                <p className="text-gray-700">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stylish Photo Gallery */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Photo Gallery</h2>
            <p className="text-xl text-gray-600">Moments that capture our vibrant college community</p>
          </div>

          {/* Masonry-style Gallery Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer break-inside-avoid mb-6"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <img
                    src={image.src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{
                      aspectRatio: 'auto',
                      minHeight: '200px',
                      maxHeight: '400px'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Camera className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-pink-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Stats */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <Camera className="h-5 w-5 text-blue-800" />
                <span className="text-blue-800 font-semibold">{galleryImages.length} Photos</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <Image className="h-5 w-5 text-pink-400" />
                <span className="text-gray-600">Campus Life Captured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <img
              src={galleryImages[selectedImage].src}
              alt={`Gallery image ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-300 to-pink-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-indigo-900 mb-6">
            Want to See More?
          </h2>
          <p className="text-xl text-indigo-800 mb-8 max-w-2xl mx-auto">
            Visit our campus in person to experience the vibrant learning environment and meet our dedicated faculty and students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center"
            >
              <Camera className="mr-2 h-5 w-5" />
              Schedule Campus Visit
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-indigo-900 hover:bg-indigo-900 hover:text-white text-indigo-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;