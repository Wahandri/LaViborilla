'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { primaryLinks, secondaryLinks } from '@/data/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          LB Restaurants
        </Link>
        <button
          className={styles.toggle}
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`${styles.navigation} ${open ? styles.open : ''}`}>
          <ul className={styles.primaryList}>
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={styles.secondaryList}>
            {secondaryLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
