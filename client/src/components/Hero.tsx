import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Quote, Download, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Pure. Organic. Traceable.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
          Indian Agricultural Excellence for US Supply Chains
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" data-testid="button-hero-quote">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg">
              <Quote className="mr-2 h-5 w-5" />
              Request a Quote
            </Button>
          </Link>
          <Link href="/products" data-testid="button-hero-download">
            <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
              <Download className="mr-2 h-5 w-5" />
              Download Product Specs
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
