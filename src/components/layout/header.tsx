"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/tracking', label: 'Tracking' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" prefetch={false}>
          <Image
            src="https://placehold.co/180x50/000000/FFFFFF?text=Lagos+Luxe&font=playfair-display"
            alt="Lagos Luxe logo"
            width={180}
            height={50}
            className="dark:invert"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === link.href ? "text-foreground" : "text-foreground/60"
              )}
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <ShoppingBag className="h-6 w-6" />
            <span className="sr-only">Toggle cart</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <Link href="/" className="flex items-center" prefetch={false}>
                  <Image
                    src="https://placehold.co/180x50/000000/FFFFFF?text=Lagos+Luxe&font=playfair-display"
                    alt="Lagos Luxe logo"
                    width={180}
                    height={50}
                    className="dark:invert"
                  />
                </Link>
                <nav className="grid gap-2 text-lg font-medium">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-center gap-4 px-2.5 transition-colors hover:text-foreground/80",
                         pathname === link.href ? "text-foreground" : "text-foreground/60"
                      )}
                      prefetch={false}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
