import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import ContentSection from '@/components/ContentSection';
import styles from './page.module.css';
import { homeContent } from '@/data/home';

export default function HomePage() {
  const { hero, venues, gallery, contact } = homeContent;

  return (
    <div className={styles.page}>
      <Hero {...hero} />
      <Menu title="Nuestros espacios" items={venues} />
      <Gallery {...gallery} />
      <ContentSection
        title={contact.title}
        paragraphs={contact.paragraphs}
        list={contact.list}
        highlight="Sólo aceptamos reservas por teléfono."
        ctas={[
          { href: 'mailto:info@lbrestaurants.es', label: 'info@lbrestaurants.es' }
        ]}
      />
    </div>
  );
}
