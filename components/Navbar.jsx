"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
    <header
      style={{
        backgroundColor: "#faf7f2",
        borderBottom: "1px solid #e6e0d4",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 1.5rem",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#7c6740", letterSpacing: "1px" }}>
          LB Restaurants
        </Link>

        {/* Botón móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.8rem",
            color: "#7c6740",
            cursor: "pointer",
            display: "block",
            marginLeft: "auto",
          }}
          className="md:hidden"
        >
          ☰
        </button>

        {/* Menú principal */}
        <ul
          style={{
            listStyle: "none",
            display: menuOpen ? "flex" : "flex",
            flexDirection: menuOpen ? "column" : "row",
            gap: menuOpen ? "1rem" : "2rem",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((link) => (
            <li key={link.name}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#4a3f35",
                    textDecoration: "none",
                    borderBottom: pathname === link.href ? "2px solid #c8a76d" : "2px solid transparent",
                    paddingBottom: "0.25rem",
                    transition: "border-color 0.3s",
                  }}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  href={link.href}
                  style={{
                    color: "#4a3f35",
                    textDecoration: "none",
                    borderBottom: pathname === link.href ? "2px solid #c8a76d" : "2px solid transparent",
                    paddingBottom: "0.25rem",
                    transition: "border-color 0.3s",
                  }}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
