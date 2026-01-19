import { testimonials } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">What Our Customers Say</h2>
          <p className="mt-2 text-lg text-muted-foreground">Real stories from our valued patrons.</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map(testimonial => {
              const image = PlaceHolderImages.find(img => img.id === testimonial.avatarImageId);
              return (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col h-full">
                      <CardContent className="flex-grow p-6 flex flex-col items-center text-center">
                        {image && (
                          <Avatar className="w-20 h-20 mb-4 border-4 border-primary/20">
                            <AvatarImage src={image.imageUrl} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        )}
                        <p className="text-muted-foreground italic flex-grow">"{testimonial.quote}"</p>
                        <div className="mt-4">
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <div className="flex justify-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
