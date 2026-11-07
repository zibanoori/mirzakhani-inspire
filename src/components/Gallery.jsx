import { useState } from 'react'
import { gallery } from '../data/content'
import Section from './Section'

export default function Gallery() {
  const [selectedImage, setselectedImage] = useState(null)

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
            onClick={() => setselectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </Section>
  )
}
