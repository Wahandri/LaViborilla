import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import RichText from '@/components/RichText';
import { legacyPages } from '@/data/pageMetadata';
import { loadLegacyContent } from '@/lib/legacyContent';

export function generateStaticParams() {
  return legacyPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }) {
  const page = legacyPages.find((item) => item.slug === params.slug);
  if (!page) {
    return {};
  }
  return {
    title: `${page.title} | LB Restaurants`,
    description: page.description
  };
}

export default function LegacyPage({ params }) {
  const page = legacyPages.find((item) => item.slug === params.slug);

  if (!page) {
    notFound();
  }

  const { paragraphs, images } = loadLegacyContent(page.slug, page.file);
  const heroImage = images.length
    ? { src: images[0].src ?? images[0], alt: page.title }
    : page.heroImage ?? null;
  const galleryImages = (heroImage ? images.slice(1) : images).map((image) => ({
    src: image.src ?? image,
    alt: page.title
  }));

  return (
    <div>
      <Hero
        title={page.title}
        subtitle={page.subtitle}
        description={page.description}
        image={heroImage}
      />
      <RichText paragraphs={paragraphs} />
      {galleryImages.length ? (
        <Gallery
          title="Galería"
          description="Imágenes originales del archivo histórico."
          images={galleryImages}
        />
      ) : null}
    </div>
  );
}
