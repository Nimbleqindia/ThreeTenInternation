import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Quality", href: "/quality" },
  ];

  return (
    <nav className="bg-card shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0" data-testid="link-home">
              <h1 className="text-2xl font-bold text-primary">Three Ten International</h1>
              <p className="text-xs text-muted-foreground">Agricultural Excellence</p>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    location === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  data-testid={`link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" data-testid="button-quote">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-b border-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  location === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} data-testid="button-mobile-quote">
              <Button className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
