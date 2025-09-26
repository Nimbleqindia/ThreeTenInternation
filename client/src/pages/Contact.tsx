import { Mail, Phone, MapPin, Clock } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

export default function Contact() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Partner with Us?</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get in touch for custom quotes, product specifications, or to discuss your specific requirements. Our team is ready to support your supply chain needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4" data-testid="contact-email">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">exports@threetenintl.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-phone">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-office">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Office</h4>
                    <p className="text-muted-foreground">Mumbai, India<br/>Distribution Center: Chicago, IL</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Business Hours */}
            <div data-testid="business-hours">
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Business Hours
              </h4>
              <div className="text-muted-foreground space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p>US Support: 8:00 AM - 5:00 PM CST</p>
              </div>
            </div>

            {/* Sustainability Section */}
            <div className="bg-muted rounded-xl p-6" data-testid="sustainability-section">
              <h3 className="text-xl font-bold text-foreground mb-4">Sustainability & Organic Focus</h3>
              <p className="text-muted-foreground mb-4">
                Empowering Indian farmers while meeting global sustainability goals through organic practices and fair trade initiatives.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground">Direct partnerships with smallholder farmers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-foreground">Eco-friendly packaging solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm text-foreground">Low-carbon logistics and fair trade initiatives</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quote Request Form */}
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}
