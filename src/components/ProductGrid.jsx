import { Button } from "@/components/ui/button";
import { Download, Leaf, Sun, Droplet, Wheat, Popcorn, Droplets } from "lucide-react";

const products = [
  { name: "Organic Soyabean Meal", icon: Leaf },
  { name: "Organic Soya Lecithin", icon: Leaf },
  { name: "Organic Sunflower Lecithin", icon: Sun },
  { name: "Organic Glycerine", icon: Droplet },
  { name: "Organic Soyabean", icon: Leaf },
  { name: "Organic Barley", icon: Wheat },
  { name: "Organic Wheat", icon: Wheat },
  { name: "Organic Cracked Popcorn", icon: Popcorn },
  { name: "Organic Castor Oil", icon: Droplets },
  { name: "Organic Flaxseed", icon: Leaf },
];

export default function ProductGrid() {
  const handleDownloadSpec = (productName) => {
    const specFile = `/pdfs/specs/${productName.toLowerCase().replace(/\s+/g, '-')}-specs.pdf`;
    const link = document.createElement('a');
    link.href = specFile;
    link.download = `${productName.toLowerCase().replace(/\s+/g, '-')}-specifications.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Premium Organic Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certified organic agricultural products sourced directly from Indian farms and processed to international standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                data-testid={`product-card-${index}`}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => handleDownloadSpec(product.name)}
                  className="text-accent hover:text-accent/80 p-0 h-auto"
                  data-testid={`button-download-${index}`}
                >
                  <Download className="mr-1 h-4 w-4" />
                  Download Spec
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}