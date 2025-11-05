'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#carta', label: 'Carta' },
  { href: '#galeria', label: 'Galería' },
  { href: '#reservas', label: 'Reservas' },
  { href: '#contacto', label: 'Contacto' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="#inicio" className={styles.logo} onClick={closeMenu}>
          La Viborrilla
        </Link>
        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={open}
          aria-label="Abrir menú"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
