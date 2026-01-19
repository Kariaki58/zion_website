'use client';

import { useCart } from '@/context/cart-context';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export function CheckoutSummary() {
  const { cartItems, totalPrice } = useCart();
  const shippingCost = 0; // Or calculate it based on address
  const grandTotal = totalPrice + shippingCost;

  return (
    <Card className="shadow-lg lg:sticky lg:top-24">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
            {cartItems.map(item => (
            <div key={`${item.id}-${item.selectedSize}`} className="flex items-center gap-4">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className="object-cover"
                />
                 <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {item.quantity}
                </span>
                </div>
                <div className="flex-1">
                <h4 className="font-semibold text-sm">{item.name}</h4>
                <p className="text-xs text-muted-foreground">Size: {item.selectedSize}</p>
                </div>
                <p className="font-semibold">₦{(item.price * item.quantity).toLocaleString()}</p>
            </div>
            ))}
        </div>
        <Separator />
        <div className="space-y-2">
            <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₦{totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shippingCost > 0 ? `₦${shippingCost.toLocaleString()}` : 'Free'}</span>
            </div>
        </div>
         <Separator />
      </CardContent>
      <CardFooter>
         <div className="flex justify-between w-full text-lg font-bold">
            <span>Total</span>
            <span>₦{grandTotal.toLocaleString()}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
