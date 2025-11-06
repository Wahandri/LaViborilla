import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Link from 'next/link';
// import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Menu />
      <Gallery />
      <Contact />

      {/* Bloque de navegación temporal hacia la web original */}
      <section style={{
        backgroundColor: '#faf7f2',
        padding: '3rem 1rem',
        textAlign: 'center',
        borderTop: '1px solid #e6e0d4',
        marginTop: '4rem'
      }}>
        <h2 style={{ color: '#4a3f35', marginBottom: '1.5rem' }}>
          Otros restaurantes del grupo LB:
        </h2>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem',
          fontSize: '1.1rem'
        }}>
          <li>
            <Link href="https://www.lbrestaurants.es/laviborilla.html" target="_blank" rel="noopener noreferrer">
              La Viborrilla
            </Link>
          </li>
          <li>
            <Link href="https://www.lbrestaurants.es/malibubeachbar.html" target="_blank" rel="noopener noreferrer">
              Malibú Beach Bar
            </Link>
          </li>
          <li>
            <Link href="https://www.lbrestaurants.es/malibupoolbar.html" target="_blank" rel="noopener noreferrer">
              Malibú Pool Bar
            </Link>
          </li>
          <li>
            <Link href="https://www.lbrestaurants.es/ninabonita.html" target="_blank" rel="noopener noreferrer">
              Niña Bonita
            </Link>
          </li>
          <li>
            <Link href="https://www.lbrestaurants.es/lbeventos.html" target="_blank" rel="noopener noreferrer">
              LB Eventos
            </Link>
          </li>
        </ul>
        <p style={{ marginTop: '2rem', color: '#9c8b6b', fontSize: '0.95rem' }}>
          Las demás páginas se abrirán en la web original hasta que se actualicen en esta nueva versión.
        </p>
      </section>
    </>
  );
}
