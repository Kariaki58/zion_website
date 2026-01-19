import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center" prefetch={false}>
              <Image
                src="/logo_zigon.png"
                alt="Lagos Luxe logo"
                width={180}
                height={50}
                className="w-28 h-10"
              />
            </Link>
            <p className="max-w-xs text-sm">
              Modern African luxury, designed with confidence and crafted with soul in the heart of Lagos.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 md:col-span-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Shop</h3>
              <div className="grid gap-2">
                <Link href="/shop" className="hover:text-foreground" prefetch={false}>
                  New Arrivals
                </Link>
                <Link href="/shop?category=Men" className="hover:text-foreground" prefetch={false}>
                  Men
                </Link>
                <Link href="/shop?category=Women" className="hover:text-foreground" prefetch={false}>
                  Women
                </Link>
                <Link href="/shop?category=Accessories" className="hover:text-foreground" prefetch={false}>
                  Accessories
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">About</h3>
              <div className="grid gap-2">
                <Link href="/about" className="hover:text-foreground" prefetch={false}>
                  Our Story
                </Link>
                <Link href="/contact" className="hover:text-foreground" prefetch={false}>
                  Contact Us
                </Link>
                <Link href="/tracking" className="hover:text-foreground" prefetch={false}>
                  Order Tracking
                </Link>
                <Link href="#" className="hover:text-foreground" prefetch={false}>
                  FAQs
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Lagos Luxe. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
