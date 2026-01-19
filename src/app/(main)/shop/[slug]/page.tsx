import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Truck, Gem, Undo2 } from 'lucide-react';
import { ProductCard } from '@/components/shop/product-card';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  const relatedProducts = products.filter(p => p.category === product?.category && p.slug !== product?.slug).slice(0, 3);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              className="object-cover"
              data-ai-hint={product.image.hint}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{product.name}</h1>
            <p className="font-bold text-2xl text-foreground mt-2">₦{product.price.toFixed(2)}</p>
            <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>
            
            <Separator className="my-8" />

            <div>
              <h3 className="text-lg font-semibold mb-4">Select Size</h3>
              <RadioGroup defaultValue={product.sizes[0]} className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <div key={size}>
                    <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
                    <Label
                      htmlFor={`size-${size}`}
                      className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer h-12 w-12"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <Button size="lg" className="w-full mt-8 bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-7">
              Add to Cart
            </Button>

            <div className="mt-8 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <span>Delivery Across Lagos</span>
              </div>
              <div className="flex items-center gap-3">
                <Gem className="h-5 w-5 text-primary" />
                <span>Premium Quality Materials</span>
              </div>
              <div className="flex items-center gap-3">
                <Undo2 className="h-5 w-5 text-primary" />
                <span>Easy Returns & Exchanges</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-16 md:my-24" />

        <div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-foreground mb-12">You Might Also Like</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
