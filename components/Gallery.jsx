import Image from 'next/image';
import styles from './Gallery.module.css';

function resolveSize(src) {
  const match = src.match(/w_(\d+).*h_(\d+)/);
  if (!match) {
    return { width: 800, height: 600 };
  }
  return { width: Number(match[1]), height: Number(match[2]) };
}

export default function Gallery({ title, description, images }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      <div className={styles.grid}>
        {images.map((image) => {
          const size = resolveSize(image.src);
          return (
            <figure key={image.src} className={styles.item}>
              <Image
                src={image.src}
                alt={image.alt}
                width={size.width}
                height={size.height}
              />
              {image.caption ? <figcaption>{image.caption}</figcaption> : null}
            </figure>
          );
        })}
      </div>
    </section>
  );
}
