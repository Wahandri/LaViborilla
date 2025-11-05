import Image from 'next/image';
import styles from './Gallery.module.css';

const images = [
  { src: '/images/gallery-1.svg', alt: 'Mesa con mariscos frescos' },
  { src: '/images/gallery-2.svg', alt: 'Vistas al mar al atardecer' },
  { src: '/images/gallery-3.svg', alt: 'Detalle de paella mediterránea' },
  { src: '/images/gallery-4.svg', alt: 'Zona chill-out con iluminación cálida' },
  { src: '/images/gallery-5.svg', alt: 'Copas y cócteles en la terraza' },
  { src: '/images/gallery-6.svg', alt: 'Espetos cocinándose al fuego' }
];

export default function Gallery() {
  return (
    <section id="galeria" className={`fade-in ${styles.gallerySection}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Galería</p>
          <h2>Instantes junto al Mediterráneo</h2>
        </div>
        <div className={styles.grid}>
          {images.map((image) => (
            <div key={image.src} className={styles.imageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
