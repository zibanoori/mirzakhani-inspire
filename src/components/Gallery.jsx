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

    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

    </div>

    </section>
  )
}
