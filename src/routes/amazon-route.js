import express from "express";
import { scrapeAmazonProducts } from "../services/server.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, "../public")));

// Rota de scraping
app.get("/api/scrape", async (req, res) => {
  const keyword = req.query.keyword;
  if (!keyword) {
    return res.status(400).json({ error: "Keyword is required" });
  }
  const URL = `https://www.amazon.com/s?k=${keyword}`;

  try {
    const products = await scrapeAmazonProducts(URL);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Redirecionar todas as outras rotas para index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
