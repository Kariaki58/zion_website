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
              Crafted in Lagos, Worn with Confidence.
            </h1>
            <div className="mt-6 space-y-6 text-lg text-muted-foreground">
              <p>
                Lagos Luxe was born from a desire to redefine modern African fashion. Our story isn't just about clothing; it's about an identity. We are rooted in the vibrant, pulsating energy of Lagos, a city that inspires our every design with its blend of rich heritage and forward-thinking style.
              </p>
              <p>
                We believe in the power of craftsmanship. Each piece in our collection is a testament to the skill of local artisans, created with meticulous attention to detail and a commitment to quality. We select only premium materials that not only look exquisite but feel incredible to wear.
              </p>
              <p>
                Our mission is to create garments that empower you. We design for the bold, the confident, and the fashion-forward individual who values both status and substance. When you wear Lagos Luxe, you're not just wearing a brand; you're wearing a piece of Lagos culture, a symbol of self-assurance and contemporary elegance.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            {aboutImage && (
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={aboutImage.imageUrl}
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
