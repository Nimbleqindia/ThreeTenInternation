import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const featuredProducts = [
  {
    name: "Organic Soy Lecithin",
    description: "Non-GMO, food-grade, viscosity-controlled, ready for pharma & food industries.",
    image: "/assets/images/products/soy-lecithin.png",
    specs: {
      "Purity Level": "99.5%",
      "Moisture": "< 2%",
      "Viscosity": "Controlled"
    },
    certifications: ["Organic", "Non-GMO", "Kosher"],
    coaFile: "/assets/pdfs/coa/organic-soy-lecithin-coa.pdf"
  },
  {
    name: "Organic Soybean Meal",
    description: "High-protein content, ideal for animal feed and food manufacturing applications.",
    image: "/assets/images/products/soybean-meal.png",
    specs: {
      "Protein Content": "48% min",
      "Moisture": "< 12%",
      "Fat Content": "< 3%"
    },
    certifications: ["Organic", "Non-GMO", "High Protein"],
    coaFile: "/assets/pdfs/coa/organic-soybean-meal-coa.pdf"
  }
];

const otherProducts = [
  "Sunflower Lecithin",
  "Organic Glycerine", 
  "Organic Barley",
  "Organic Wheat",
  "Cracked Corn",
  "Castor Oil",
  "Organic Flaxseed",
  "Organic Soybean"
];

export default function Products() {
  const handleDownloadCOA = (coaFile: string, productName: string) => {
    const link = document.createElement('a');
    link.href = coaFile;
    link.download = `${productName.toLowerCase().replace(/\s+/g, '-')}-coa.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadSpecs = (productName: string) => {
    const specFile = `/assets/pdfs/specs/${productName.toLowerCase().replace(/\s+/g, '-')}-specs.pdf`;
    const link = document.createElement('a');
    link.href = specFile;
    link.download = `${productName.toLowerCase().replace(/\s+/g, '-')}-specifications.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Products</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our premium organic products are carefully processed and tested to meet the highest international standards for the pharmaceutical and food industries.
          </p>
        </div>
        
        {/* Featured Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProducts.map((product, index) => (
            <Card key={index} className="product-card overflow-hidden" data-testid={`featured-product-${index}`}>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-sm text-muted-foreground">{key}:</span>
                        <span className="text-sm font-medium text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.certifications.map((cert, certIndex) => (
                      <Badge key={certIndex} variant="secondary" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => handleDownloadCOA(product.coaFile, product.name)}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    data-testid={`button-coa-${index}`}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download COA Sample
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Other Products Quick List */}
        <Card className="shadow-lg" data-testid="other-products-section">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Complete Product Portfolio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherProducts.map((product, index) => (
                <div 
                  key={index}
                  className="text-center p-4 border border-border rounded-lg hover:border-primary transition-colors"
                  data-testid={`other-product-${index}`}
                >
                  <h4 className="font-semibold text-foreground mb-2">{product}</h4>
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => handleDownloadSpecs(product)}
                    className="text-accent hover:text-accent/80 p-0 h-auto"
                    data-testid={`button-specs-${index}`}
                  >
                    Download Specs
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
