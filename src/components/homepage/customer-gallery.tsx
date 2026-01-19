import { customerPhotos } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export function CustomerGallery() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">How It Looks on Our Customers</h2>
          <p className="mt-2 text-lg text-muted-foreground">See how our customers style their confidence.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {customerPhotos.map((photoMeta) => {
            const photo = PlaceHolderImages.find(p => p.id === photoMeta.id);
            if (!photo) return null;
            return (
              <div key={photo.id} className="aspect-square relative rounded-lg overflow-hidden group">
                <Image
                  src={photo.imageUrl}
                  alt={photo.description}
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                  data-ai-hint={photo.imageHint}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
