import './globals.css';
import styles from './layout.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'LB Restaurants',
  description:
    'LB Restaurants: La Viborilla, Malibú Beach Bar, Niña Bonita y Malibú Pool Bar en Benalmádena.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={styles.body}>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
