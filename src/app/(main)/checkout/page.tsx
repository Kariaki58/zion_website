import { CheckoutForm } from "@/components/checkout/checkout-form";
import { CheckoutSummary } from "@/components/checkout/checkout-summary";

export default function CheckoutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">Checkout</h1>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <CheckoutForm />
          </div>
          <div className="order-1 lg:order-2 mb-8 lg:mb-0">
             <CheckoutSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
