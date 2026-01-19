import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh]">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
      <div className="relative h-full flex flex-col items-start justify-end p-8 md:p-16 lg:p-24">
        <div className="max-w-2xl text-white">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter !leading-tight">
            Wear Your Confidence.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-200">
            Discover modern African luxury. Premium fabrics, bold designs, and the spirit of Uyo in every stitch.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-7 px-8">
            <Link href="/shop">
              Shop New Arrivals
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
