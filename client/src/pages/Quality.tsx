import { Sprout, Warehouse, ServerCog, Microscope, Ship, Truck, QrCode, TestTube, Shield } from "lucide-react";
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
        
        {/* Process Flow */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-4">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-primary", "bg-secondary", "bg-accent"];
              return (
                <div 
                  key={index}
                  className="process-step text-center flex-1"
                  data-testid={`process-step-${index}`}
                >
                  <div className={`w-24 h-24 ${colors[index]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.name}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Quality Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            const iconColors = ["text-primary", "text-secondary", "text-accent"];
            const bgColors = ["bg-primary/10", "bg-secondary/10", "bg-accent/10"];
            return (
              <Card key={index} className="shadow-lg text-center" data-testid={`quality-feature-${index}`}>
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${bgColors[index]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`h-8 w-8 ${iconColors[index]}`} />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
