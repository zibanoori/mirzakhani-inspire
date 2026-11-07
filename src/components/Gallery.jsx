import { useState } from 'react'
import { gallery } from '../data/content'
import Section from './Section'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <Section
      id="gallery"
      eyebrow="Visuals"
      title="Gallery"
      intro="Moments captured from her journey."
      tinted={false}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gallery.map((img) => (
          <div
            key={img.id}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full animate-fade-in">
            <button
              className="absolute -top-10 right-0 text-white hover:text-gold text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="w-full rounded-lg shadow-2xl"
            />
            <p className="text-center text-white mt-4 font-serif">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </Section>
  )
}
