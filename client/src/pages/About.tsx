import { Check } from "lucide-react";

const certifications = [
  { name: "USDA ORGANIC", color: "green" },
  { name: "NON-GMO PROJECT", color: "blue" },
  { name: "FSSAI CERTIFIED", color: "orange" },
  { name: "ISO 22000", color: "purple" },
  { name: "HACCP CERTIFIED", color: "red" }
];

const strengths = [
  {
    title: "Centuries-old farming traditions",
    description: "Time-tested agricultural practices passed down through generations"
  },
  {
    title: "Large-scale organic production", 
    description: "Extensive organic farming networks ensuring consistent supply"
  },
  {
    title: "Competitive global pricing",
    description: "Cost-effective solutions without compromising quality"
  }
];

export default function About() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Choose Indian Agriculture?</h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              India's agricultural heritage spans centuries, combining traditional farming wisdom with modern organic practices. Our vast agricultural landscapes and favorable climate conditions produce some of the world's finest organic products.
            </p>
            
            <div className="space-y-4 mb-8">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-start space-x-3" data-testid={`strength-${index}`}>
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{strength.title}</h4>
                    <p className="text-muted-foreground">{strength.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Certification Logos */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Global Certifications & Standards</h4>
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="certification-badge bg-card p-3 rounded-lg shadow-sm border border-border"
                    data-testid={`certification-${index}`}
                  >
                    <div className={`w-16 h-16 bg-${cert.color}-100 rounded-lg flex items-center justify-center`}>
                      <span className={`text-xs font-bold text-${cert.color}-700 text-center`}>
                        {cert.name.split(' ').map((word, i) => (
                          <div key={i}>{word}</div>
                        ))}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Traditional Indian farmer working in organic fields */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Indian farmer in organic field" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
                data-testid="image-farmer"
              />
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm font-medium text-foreground">From smallholder farms in India...</p>
              </div>
            </div>
            
            {/* Modern processing and manufacturing facility */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Modern food processing facility" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
                data-testid="image-facility"
              />
              <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm font-medium text-foreground">...to verified export supply chains</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
