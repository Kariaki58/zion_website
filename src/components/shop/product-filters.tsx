'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

const categories = ["Men", "Women", "Accessories"];
const sizes = ["S", "M", "L", "XL", "One Size"];

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 500]);

  return (
    <div className="lg:sticky lg:top-24">
      <h2 className="text-2xl font-bold font-headline mb-6">Filters</h2>
      <Accordion type="multiple" defaultValue={['category', 'price']} className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger className="text-lg font-semibold">Category</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {categories.map(category => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category}`} />
                  <Label htmlFor={`category-${category}`} className="text-base">{category}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="size">
          <AccordionTrigger className="text-lg font-semibold">Size</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {sizes.map(size => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox id={`size-${size}`} />
                  <Label htmlFor={`size-${size}`} className="text-base">{size}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger className="text-lg font-semibold">Price</AccordionTrigger>
          <AccordionContent>
            <div className="py-4">
              <Slider
                defaultValue={priceRange}
                max={500}
                step={10}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between mt-2 text-muted-foreground">
                <span>₦{priceRange[0]}</span>
                <span>₦{priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
