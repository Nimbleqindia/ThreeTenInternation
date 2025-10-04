import { Sprout, Warehouse, ServerCog, Microscope, Ship, Truck, QrCode, TestTube, Shield, ArrowDown, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  { name: "Farm", icon: Sprout, description: "Certified organic farms with traditional practices" },
  { name: "Collection", icon: Warehouse, description: "Systematic collection and quality grading" },
  { name: "Processing", icon: ServerCog, description: "State-of-the-art processing facilities" },
  { name: "Testing", icon: Microscope, description: "Rigorous laboratory analysis and certification" },
  { name: "Export", icon: Ship, description: "Secure packaging and documentation" },
  { name: "US Delivery", icon: Truck, description: "Direct delivery to your facility" }
];

const qualityFeatures = [
  {
    icon: QrCode,
    title: "Batch-wise COA & Traceability",
    description: "Every batch comes with detailed Certificate of Analysis and unique traceability codes for complete transparency."
  },
  {
    icon: TestTube,
    title: "Certified Testing Partners", 
    description: "Partnership with NABL-accredited laboratories and international testing facilities for comprehensive analysis."
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% quality guarantee with full documentation and compliance to international food safety standards."
  }
];

export default function Quality() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Traceability & Quality Assurance</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From farm to your facility, every step is documented and verified to ensure the highest quality and complete traceability.
          </p>
        </div>
        
        {/* Process Flow with Enhanced Visual Connection */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Our Quality Process</h2>
            <p className="text-muted-foreground">Follow our comprehensive 6-step process that ensures premium quality at every stage</p>
          </div>
          
          <div className="relative">
            {/* Desktop Flow - Horizontal with connecting lines */}
            <div className="hidden lg:block">
              <div className="flex items-center justify-between space-x-4 relative">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-primary", "bg-secondary", "bg-accent"];
                  return (
                    <div key={index} className="text-center flex-1 relative">
                      {/* Connecting Arrow - Show for all except last item */}
                      {index < processSteps.length - 1 && (
                        <div className="absolute top-12 left-1/2 transform translate-x-8 lg:translate-x-12 z-10">
                          <ChevronRight className="h-6 w-6 text-muted-foreground" />
                        </div>
                      )}
                      
                      <div 
                        className="process-step relative z-20"
                        data-testid={`process-step-${index}`}
                      >
                        <div className={`w-24 h-24 ${colors[index]} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-105 transition-transform duration-200`}>
                          <IconComponent className="h-12 w-12 text-white" />
                        </div>
                        <h3 className="font-bold text-foreground mb-2">{step.name}</h3>
                        <p className="text-muted-foreground text-sm px-2">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Mobile Flow - Vertical with connecting lines */}
            <div className="lg:hidden space-y-6">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-primary", "bg-secondary", "bg-accent"];
                return (
                  <div key={index} className="flex items-center space-x-4 relative">
                    {/* Connecting line for mobile */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-12 top-20 w-0.5 h-6 bg-muted-foreground/30"></div>
                    )}
                    
                    <div 
                      className="process-step text-center"
                      data-testid={`process-step-${index}`}
                    >
                      <div className={`w-24 h-24 ${colors[index]} rounded-full flex items-center justify-center shadow-lg`}>
                        <IconComponent className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-2">{step.name}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Smooth Transition to Quality Features */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="h-0.5 w-20 bg-muted-foreground/30"></div>
            <ArrowDown className="h-6 w-6 mx-4 text-muted-foreground" />
            <div className="h-0.5 w-20 bg-muted-foreground/30"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Quality Assurance Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence is backed by comprehensive quality measures and transparent documentation at every step.
          </p>
        </div>
        
        {/* Enhanced Quality Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            const iconColors = ["text-primary", "text-secondary", "text-accent"];
            const bgColors = ["bg-primary/10", "bg-secondary/10", "bg-accent/10"];
            const borderColors = ["border-primary/20", "border-secondary/20", "border-accent/20"];
            return (
              <Card 
                key={index} 
                className={`shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${borderColors[index]} border-2`} 
                data-testid={`quality-feature-${index}`}
              >
                <CardContent className="p-8">
                  <div className={`w-20 h-20 ${bgColors[index]} rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110`}>
                    <IconComponent className={`h-10 w-10 ${iconColors[index]}`} />
                  </div>
                  <h3 className="font-bold text-foreground mb-4 text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Call to Action Section */}
        <div className="mt-16 text-center bg-card p-8 rounded-xl border border-border">
          <h3 className="text-xl font-bold text-foreground mb-3">Ready to Experience Premium Quality?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our rigorous quality processes ensure that every product meets the highest international standards. 
            Get detailed specifications and certificates of analysis for any product.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              USDA Organic Certified
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
              ISO 22000 Compliant
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
              Non-GMO Project Verified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}