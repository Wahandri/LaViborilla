"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "/" },
    { name: "La Viborrilla", href: "https://www.lbrestaurants.es/laviborilla.html", external: true },
    { name: "Malibú Beach", href: "https://www.lbrestaurants.es/malibubeachbar.html", external: true },
    { name: "Malibú Pool", href: "https://www.lbrestaurants.es/malibupoolbar.html", external: true },
    { name: "Niña Bonita", href: "https://www.lbrestaurants.es/ninabonita.html", external: true },
    { name: "Eventos", href: "https://www.lbrestaurants.es/lbeventos.html", external: true },
    { name: "Contacto", href: "https://www.lbrestaurants.es/contacto.html", external: true },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          LB Restaurants
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className={styles.menuButton}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <ul className={`${styles.menuList} ${menuOpen ? styles.open : ""}`}>
          {links.map((link) => {
            const isActive = !link.external && pathname === link.href;
            const linkClassName = `${styles.link} ${isActive ? styles.linkActive : ""}`;

            return (
              <li key={link.name}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link href={link.href} className={linkClassName}>
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
