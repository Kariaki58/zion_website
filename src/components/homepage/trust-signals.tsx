import { Truck, Gem, Undo2 } from 'lucide-react';

const signals = [
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Delivery Across Lagos',
    description: 'Fast and reliable delivery to your doorstep, wherever you are in Lagos.'
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: 'Quality Materials',
    description: 'We source premium, durable fabrics for pieces that last and feel exceptional.'
  },
  {
    icon: <Undo2 className="h-8 w-8 text-primary" />,
    title: 'Easy Returns',
    description: 'Not the perfect fit? Our hassle-free return policy has you covered.'
  },
];

export function TrustSignals() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {signals.map((signal) => (
            <div key={signal.title} className="flex flex-col items-center">
              {signal.icon}
              <h3 className="mt-4 text-xl font-bold text-foreground">{signal.title}</h3>
              <p className="mt-2 text-muted-foreground">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
