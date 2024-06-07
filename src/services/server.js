import axios from "axios";
import jsdom from "jsdom";
const { JSDOM } = jsdom;

// Função de iniciar a Raspagem de Dados
export const scrapeAmazonProducts = async (url) => {
  try {
    // Conectando ao site da Amazon
    const response = await axios.get(url);
    // Iniciando a conversão com JSDOM em response.data
    const dom = new JSDOM(response.data);
    const document = dom.window.document;
    // Variável responsável por armazenar itens após a interação
    const products = [];
    const productElements = document.querySelectorAll(
      'div[data-component-type="s-search-result"]'
    );
    // Extraindo detalhes dos produtos, atribuindo variáveis e tratando erros para elementos ausentes
    for (const productElement of productElements) {
      const title =
        productElement.querySelector("h2 a span")?.textContent?.trim() || "N/A";
      const rating =
        productElement.querySelector(".a-icon-alt")?.textContent?.trim() ||
        "N/A";
      const reviewCount =
        productElement
          .querySelector(".a-size-base.s-underline-text")
          ?.textContent?.trim() || "N/A";
      const imageUrl =
        productElement.querySelector("img.s-image")?.src || "N/A";

      products.push({ title, rating, reviewCount, imageUrl });
    }

    return products;
  } catch (error) {
    console.error("Error scraping products:", error);
    throw new Error("Failed to scrape products");
  }
};
