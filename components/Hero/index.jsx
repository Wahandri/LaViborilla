import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="inicio" className={`${styles.hero} fade-in`}>
      <div className={styles.background}>
        <Image
          src="/images/hero.svg"
          alt="Terraza frente al mar en La Viborrilla"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <p className={styles.overline}>Benalmádena Costa · Málaga</p>
        <h1>La Viborrilla — Cocina Mediterránea desde 1968</h1>
        <p className={styles.subtitle}>
          Pescados al espeto, arroces y sabores del mediterráneo, servidos junto al mar en un ambiente relajado y elegante.
        </p>
        <div className={styles.actions}>
          <a className={styles.primaryButton} href="#reservas">
            Reserva tu mesa
          </a>
          <a className={styles.secondaryButton} href="#carta">
            Ver carta
          </a>
        </div>
      </div>
    </section>
  );
}
