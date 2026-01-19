import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function FeaturedCollections() {
  const menCollectionImage = PlaceHolderImages.find(img => img.id === 'men-collection');
  const womenCollectionImage = PlaceHolderImages.find(img => img.id === 'women-collection');

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Featured Collections</h2>
          <p className="mt-2 text-lg text-muted-foreground">Curated styles for the modern individual.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {womenCollectionImage && (
            <Link href="/shop?category=Women" className="group relative block overflow-hidden rounded-lg">
              <Image
                src={womenCollectionImage.imageUrl}
                alt={womenCollectionImage.description}
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                data-ai-hint={womenCollectionImage.imageHint}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white text-center">
                <h3 className="font-headline text-4xl font-bold">For Her</h3>
                <Button variant="outline" className="mt-4 bg-transparent border-white text-white hover:bg-white hover:text-black">
                  Shop Women <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Link>
          )}
          {menCollectionImage && (
            <Link href="/shop?category=Men" className="group relative block overflow-hidden rounded-lg">
              <Image
                src={menCollectionImage.imageUrl}
                alt={menCollectionImage.description}
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                data-ai-hint={menCollectionImage.imageHint}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white text-center">
                <h3 className="font-headline text-4xl font-bold">For Him</h3>
                <Button variant="outline" className="mt-4 bg-transparent border-white text-white hover:bg-white hover:text-black">
                  Shop Men <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
