"use client";

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { CartSheet } from '@/components/shop/cart-sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/checkout', label: 'Checkout'},
  { href: '/tracking', label: 'Tracking' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" prefetch={false}>
          <Image
            src="/logo_zigon.png"
            alt="Lagos Luxe logo"
            width={180}
            height={50}
            className="w-28 h-10"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === link.href ? "text-foreground" : "text-foreground/60",
                 // Hide checkout on desktop nav
                link.href === '/checkout' ? 'hidden' : ''
              )}
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <CartSheet />
          </div>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <Link href="/" className="flex items-center" prefetch={false} onClick={() => setIsSheetOpen(false)}>
                   <Image
                    src="/logo_zigon.png"
                    alt="Lagos Luxe logo"
                    width={180}
                    height={50}
                    className="w-28 h-10"
                  />
                 </Link>
                <nav className="grid gap-2 text-lg font-medium mt-4">
                  {navLinks.map((link) => (
                     <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-center gap-4 px-2.5 py-2 transition-colors hover:text-foreground/80",
                         pathname === link.href ? "text-foreground" : "text-foreground/60",
                         link.href === '/checkout' ? 'hidden' : ''
                      )}
                      onClick={() => setIsSheetOpen(false)}
                      prefetch={false}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
           <div className="md:hidden">
            <CartSheet />
          </div>
        </div>
      </div>
    </header>
  );
}
