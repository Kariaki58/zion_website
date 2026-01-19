import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/mock-data';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/shop/${product.slug}`}>
      <Card className="group overflow-hidden rounded-lg border-0 shadow-none transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-0">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={product.image.hint}
            />
          </div>
          <div className="p-4 bg-card">
            <h3 className="font-semibold text-lg text-foreground truncate">{product.name}</h3>
            <p className="text-muted-foreground text-sm">{product.category}</p>
            <p className="font-bold text-lg text-foreground mt-2">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
