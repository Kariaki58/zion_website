import { products } from '@/lib/mock-data';
import { ProductCard } from '@/components/shop/product-card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export function NewArrivals() {
  const newArrivals = products.filter(p => p.isNewArrival).slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">New Arrivals</h2>
            <p className="mt-2 text-lg text-muted-foreground">Fresh from our workshop to your wardrobe.</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/shop">
              Shop All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
