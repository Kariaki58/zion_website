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
  },
];

export const clothingItemsForVisualizer = products.map(p => ({
  value: p.slug,
  label: p.name,
  description: p.description
}));
