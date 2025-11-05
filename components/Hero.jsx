import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero({ title, subtitle, description, image }) {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className={styles.image}
            priority
          />
        ) : null}
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        <h1 className={styles.title}>{title}</h1>
        {description ? <p className={styles.description}>{description}</p> : null}
      </div>
    </section>
  );
}
