import { ProductCard } from '@/components/shop/product-card';
import { ProductFilters } from '@/components/shop/product-filters';
import { products } from '@/lib/mock-data';

export default function ShopPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">All Products</h1>
          <p className="mt-2 text-lg text-muted-foreground">Explore our collection of modern African luxury.</p>
        </div>
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <ProductFilters />
          </aside>
          <main className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
