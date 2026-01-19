import { Hero } from '@/components/homepage/hero';
import { FeaturedCollections } from '@/components/homepage/featured-collections';
import { TrustSignals } from '@/components/homepage/trust-signals';
import { NewArrivals } from '@/components/homepage/new-arrivals';
import { BestSellers } from '@/components/homepage/best-sellers';
import { Testimonials } from '@/components/homepage/testimonials';
import { CustomerGallery } from '@/components/homepage/customer-gallery';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <NewArrivals />
      <BestSellers />
      <CustomerGallery />
      <Testimonials />
      <TrustSignals />
    </>
  );
}
