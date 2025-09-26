import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertQuoteRequestSchema } from "../../../shared/schema.js";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";

const productOptions = [
  { value: "soybean-meal", label: "Organic Soybean Meal" },
  { value: "soy-lecithin", label: "Organic Soy Lecithin" },
  { value: "sunflower-lecithin", label: "Organic Sunflower Lecithin" },
  { value: "glycerine", label: "Organic Glycerine" },
  { value: "soybean", label: "Organic Soybean" },
  { value: "barley", label: "Organic Barley" },
  { value: "wheat", label: "Organic Wheat" },
  { value: "corn", label: "Organic Cracked Corn" },
  { value: "castor-oil", label: "Organic Castor Oil" },
  { value: "flaxseed", label: "Organic Flaxseed" },
];

export default function QuoteForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedProducts, setSelectedProducts] = useState([]);

  const form = useForm({
    resolver: zodResolver(insertQuoteRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      products: [],
      quantity: "",
      message: "",
    },
  });

  const createQuoteRequest = useMutation({
    mutationFn: async (data) => {
      const response = await apiRequest("POST", "/api/quote-requests", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Submitted",
        description: "Thank you for your quote request! We will contact you within 24 hours.",
      });
      form.reset();
      setSelectedProducts([]);
      queryClient.invalidateQueries({ queryKey: ["/api/quote-requests"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
      console.error("Quote request error:", error);
    },
  });

  const handleProductToggle = (productValue) => {
    const newSelected = selectedProducts.includes(productValue)
      ? selectedProducts.filter(p => p !== productValue)
      : [...selectedProducts, productValue];
    
    setSelectedProducts(newSelected);
    form.setValue("products", newSelected);
  };

  const onSubmit = (data) => {
    createQuoteRequest.mutate(data);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground">Request a Quote</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                {...form.register("firstName")}
                placeholder="John"
                data-testid="input-first-name"
              />
              {form.formState.errors.firstName && (
                <p className="text-sm text-destructive mt-1">{form.formState.errors.firstName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                {...form.register("lastName")}
                placeholder="Doe"
                data-testid="input-last-name"
              />
              {form.formState.errors.lastName && (
                <p className="text-sm text-destructive mt-1">{form.formState.errors.lastName.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <Label htmlFor="company">Company Name *</Label>
            <Input
              {...form.register("company")}
              placeholder="Your Company"
              data-testid="input-company"
            />
            {form.formState.errors.company && (
              <p className="text-sm text-destructive mt-1">{form.formState.errors.company.message}</p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                type="email"
                {...form.register("email")}
                placeholder="john@company.com"
                data-testid="input-email"
              />
              {form.formState.errors.email && (
                <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="tel"
                {...form.register("phone")}
                placeholder="+1 (555) 123-4567"
                data-testid="input-phone"
              />
            </div>
          </div>
          
          <div>
            <Label>Products of Interest *</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 max-h-40 overflow-y-auto border border-border rounded-md p-3">
              {productOptions.map((product) => (
                <label key={product.value} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.value)}
                    onChange={() => handleProductToggle(product.value)}
                    className="rounded border-border"
                    data-testid={`checkbox-${product.value}`}
                  />
                  <span className="text-sm">{product.label}</span>
                </label>
              ))}
            </div>
            {form.formState.errors.products && (
              <p className="text-sm text-destructive mt-1">{form.formState.errors.products.message}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="quantity">Estimated Quantity (MT/month)</Label>
            <Input
              type="number"
              {...form.register("quantity")}
              placeholder="100"
              min="1"
              data-testid="input-quantity"
            />
          </div>
          
          <div>
            <Label htmlFor="message">Additional Requirements</Label>
            <Textarea
              {...form.register("message")}
              rows={4}
              placeholder="Please describe your specific requirements, delivery timeline, or any questions you may have..."
              data-testid="textarea-message"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={createQuoteRequest.isPending}
            data-testid="button-submit-quote"
          >
            <Send className="mr-2 h-4 w-4" />
            {createQuoteRequest.isPending ? "Sending..." : "Send Quote Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}