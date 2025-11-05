import Link from 'next/link';
import styles from './Menu.module.css';

export default function Menu({ title, items }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.title} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className={styles.meta}>
              {item.phone ? <p className={styles.phone}>{item.phone}</p> : null}
              {item.cta ? (
                <Link href={item.cta.href} className={styles.link}>
                  {item.cta.label}
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
