import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { storage } from "./storage";
import { insertQuoteRequestSchema } from "@shared/schema";
import { z } from "zod";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function registerRoutes(app: Express): Promise<Server> {
  // Static assets serving
  app.use("/assets", express.static(path.join(__dirname, "assets")));

  // Quote request endpoint
  app.post("/api/quote-requests", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quoteRequest = await storage.createQuoteRequest(validatedData);
      res.json({ success: true, quoteRequest });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all quote requests (for admin purposes)
  app.get("/api/quote-requests", async (req, res) => {
    try {
      const quoteRequests = await storage.getQuoteRequests();
      res.json(quoteRequests);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch quote requests" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
