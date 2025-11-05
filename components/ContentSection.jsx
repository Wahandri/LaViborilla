import styles from './ContentSection.module.css';

export default function ContentSection({ title, paragraphs, highlight, list, ctas }) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {title ? <h2>{title}</h2> : null}
        {highlight ? <p className={styles.highlight}>{highlight}</p> : null}
        {paragraphs?.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {list?.length ? (
          <ul>
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {ctas?.length ? (
          <div className={styles.ctas}>
            {ctas.map((cta) => (
              <a key={cta.href} href={cta.href} className={styles.cta}>
                {cta.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
