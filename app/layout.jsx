import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

export const metadata = {
  title: 'La Viborrilla — Cocina Mediterránea desde 1968',
  description:
    'Restaurante La Viborrilla en Benalmádena. Cocina mediterránea, pescados y mariscos frescos frente al mar desde 1968.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <div className="layout-shell">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
