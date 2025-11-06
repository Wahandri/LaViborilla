import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <h3>La Viborrilla</h3>
          <p>Tradición mediterránea desde 1968.</p>
        </div>
        <div className={styles.links}>
          <a href="https://www.facebook.com/LaViborrilla" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://www.instagram.com/laviborrilla/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <p className={styles.copy}>© {new Date().getFullYear()} La Viborrilla. Todos los derechos reservados.</p>
    </footer>
  );
}
