import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us');

  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground !leading-tight">
              Crafted with Excellence, Worn with Confidence.
            </h1>
            <div className="mt-6 space-y-6 text-lg text-muted-foreground">
              <p>
                🏆 ZIGON is a multi sector company redefining modern luxury across Fashion, Interior Design, Real Estate, and Contracting.
              </p>
              <p>
                Our dedicated team merges creativity with craftsmanship to deliver timeless pieces, exquisite spaces, and world class projects that embody confidence, elegance, and innovation.
              </p>
              <p>
                We believe in the power of craftsmanship. Each piece in our collection is a testament to the skill of local artisans, created with meticulous attention to detail and a commitment to quality. We select only premium materials that not only look exquisite but feel incredible to wear.
              </p>
              <p>
                At ZIGON, we don't just build or style, we create experiences that inspire excellence, reflect sophistication, and leave a lasting impression. We design for the bold, the confident, and the fashion-forward individual who values both status and substance.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            {aboutImage && (
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/about-image.png"
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
