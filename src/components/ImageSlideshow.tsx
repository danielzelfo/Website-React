import { useState } from 'react'
import styles from './ImageSlideshow.module.css'

interface SlideshowImage {
  url: string
  caption: string
}

interface Props {
  images: SlideshowImage[]
  alt: string
}

export function ImageSlideshow({ images, alt }: Props) {
  const [current, setCurrent] = useState(0)

  if (images.length === 0) return null

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))

  return (
    <div className={styles.slideshow}>
      <div className={styles.imageContainer}>
        <img
          src={images[current].url}
          alt={images[current].caption || `${alt} ${current + 1}`}
          className={styles.image}
        />
        {images.length > 1 && (
          <>
            <button onClick={prev} className={styles.navPrev} aria-label="Previous image">
              ‹
            </button>
            <button onClick={next} className={styles.navNext} aria-label="Next image">
              ›
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className={styles.indicators}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={i === current ? styles.dotActive : styles.dot}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
      {images[current].caption && (
        <p className={styles.caption}>{images[current].caption}</p>
      )}
    </div>
  )
}
