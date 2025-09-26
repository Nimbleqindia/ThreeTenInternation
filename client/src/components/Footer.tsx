import { Link } from "wouter";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Three Ten International</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your trusted partner for premium organic agricultural products from India. Building sustainable supply chains that connect Indian farmers with global markets.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/vandana-organic-trade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/VandanaOrganicTrade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/officialvandanaorganic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/products" className="hover:text-primary transition-colors" data-testid="link-soybean-products">Soybean Products</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors" data-testid="link-lecithin-products">Lecithin Products</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors" data-testid="link-organic-grains">Organic Grains</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors" data-testid="link-specialty-oils">Specialty Oils</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors" data-testid="link-about-us">About Us</Link></li>
              <li><Link href="/quality" className="hover:text-primary transition-colors" data-testid="link-quality-assurance">Quality Assurance</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors" data-testid="link-certifications">Certifications</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors" data-testid="link-contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Three Ten International. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
