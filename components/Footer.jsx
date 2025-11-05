import Link from 'next/link';
import styles from './Footer.module.css';

const legalLinks = [
  { href: '/aviso-legal', label: 'Aviso Legal' },
  { href: '/politica-de-cookies', label: 'Política de Cookies' },
  { href: '/politica-de-privacidad', label: 'Política de Privacidad' },
  { href: '/declaracion-de-privacidad', label: 'Declaración de Privacidad' }
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.identity}>
          <h2>LB Restaurants</h2>
          <p>Benalmádena · Málaga · Andalucía · España</p>
          <a href="mailto:info@lbrestaurants.es">info@lbrestaurants.es</a>
        </div>
        <div className={styles.legal}>
          <nav>
            <ul>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} LB Restaurants. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
