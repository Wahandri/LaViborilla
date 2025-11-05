import styles from './RichText.module.css';

export default function RichText({ paragraphs, title }) {
  if (!paragraphs?.length) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {title ? <h2>{title}</h2> : null}
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </section>
  );
}
