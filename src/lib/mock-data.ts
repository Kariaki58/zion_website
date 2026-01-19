import { PlaceHolderImages } from './placeholder-images';

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  image: {
    src: string;
    alt: string;
    hint: string;
  };
  category: 'Men' | 'Women' | 'Accessories';
  sizes: string[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
};

const getImage = (id: string) => {
  const imageData = PlaceHolderImages.find(img => img.id === id);
  if (!imageData) {
    return { src: 'https://placehold.co/600x800', alt: 'Placeholder', hint: 'placeholder' };
  }
  return { src: imageData.imageUrl, alt: imageData.description, hint: imageData.imageHint };
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'elegant-green-silk-shirt',
    name: 'Elegant Green Silk Shirt',
    description: 'Crafted from the finest silk, this shirt offers a luxurious feel and a flattering drape. A timeless piece for any wardrobe.',
    price: 150.00,
    image: getImage('product-1'),
    category: 'Women',
    sizes: ['S', 'M', 'L', 'XL'],
    isNewArrival: true,
  },
  {
    id: '2',
    slug: 'modern-cut-patterned-trousers',
    name: 'Modern-Cut Patterned Trousers',
    description: 'Make a statement with these bold patterned trousers. The modern cut ensures a comfortable fit and a stylish silhouette.',
    price: 120.00,
    image: getImage('product-2'),
    category: 'Women',
    sizes: ['S', 'M', 'L'],
    isBestSeller: true,
  },
  {
    id: '3',
    slug: 'gold-accent-necklace',
    name: 'Gold Accent Necklace',
    description: 'A delicate necklace with a muted gold accent, perfect for adding a touch of elegance to any outfit.',
    price: 85.00,
    image: getImage('product-3'),
    category: 'Accessories',
    sizes: ['One Size'],
  },
  {
    id: '4',
    slug: 'flowing-white-linen-dress',
    name: 'Flowing White Linen Dress',
    description: 'Embrace effortless style with this flowing linen dress. Breathable, comfortable, and undeniably chic.',
    price: 180.00,
    image: getImage('product-4'),
    category: 'Women',
    sizes: ['S', 'M', 'L', 'XL'],
    isNewArrival: true,
  },
  {
    id: '5',
    slug: 'sharp-tailored-blazer',
    name: 'Sharp Tailored Blazer',
    description: 'A masterfully tailored blazer that exudes confidence. The sharp lines and quality fabric make it a standout piece for men.',
    price: 250.00,
    image: getImage('product-5'),
    category: 'Men',
    sizes: ['38R', '40R', '42R', '44R'],
    isBestSeller: true,
  },
  {
    id: '6',
    slug: 'handcrafted-leather-sandals',
    name: 'Handcrafted Leather Sandals',
    description: 'Experience true craftsmanship with these leather sandals, handmade by local artisans. Durable, stylish, and unique.',
    price: 95.00,
    image: getImage('product-6'),
    category: 'Accessories',
    sizes: ['39', '40', '41', '42', '43', '44'],
  },
  {
    id: '7',
    slug: 'vibrant-aso-oke-top',
    name: 'Vibrant Aso-Oke Top',
    description: 'A stunning top made from traditional Aso-Oke fabric, reimagined with a modern design. A true celebration of heritage.',
    price: 135.00,
    image: getImage('product-7'),
    category: 'Women',
    sizes: ['S', 'M', 'L'],
    isNewArrival: true,
  },
  {
    id: '8',
    slug: 'minimalist-black-jumpsuit',
    name: 'Minimalist Black Jumpsuit',
    description: 'The epitome of modern sophistication. This black jumpsuit features a clean, minimalist design for a powerful look.',
    price: 220.00,
    image: getImage('product-8'),
    category: 'Women',
    sizes: ['S', 'M', 'L', 'XL'],
    isBestSeller: true,
  },
];

export const clothingItemsForVisualizer = products.map(p => ({
  value: p.slug,
  label: p.name,
  description: p.description
}));

export const testimonials = [
  {
    id: '1',
    name: 'Adebayo T.',
    avatarImageId: 'testimonial-1',
    quote: 'The quality of the fabric is just outstanding. I feel like royalty wearing my Lagos Luxe shirt. I get compliments everywhere I go!'
  },
  {
    id: '2',
    name: 'Chiamaka N.',
    avatarImageId: 'testimonial-3',
    quote: 'Finally, a brand that truly understands modern African elegance. The designs are so unique and powerful. I\'m a customer for life.'
  },
  {
    id: '3',
    name: 'Femi A.',
    avatarImageId: 'testimonial-2',
    quote: 'My blazer is my new favorite piece of clothing. The fit is perfect, and it just commands respect. Worth every single Naira.'
  }
];

export const customerPhotos = [
  { id: 'customer-1' },
  { id: 'customer-2' },
  { id: 'customer-3' },
  { id: 'customer-4' },
];
