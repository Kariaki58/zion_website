import { Hero } from '@/components/homepage/hero';
import { FeaturedCollections } from '@/components/homepage/featured-collections';
import { TrustSignals } from '@/components/homepage/trust-signals';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <TrustSignals />
    </>
  );
}
