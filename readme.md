# Amazon Scraper 
Este é um raspador simples do site da Amazon.com, foi criado com base em um desafio tecnico imposto por uma vaga de estagio Backend
## Overview

This project provides a basic scraper to extract product listings from the first page of Amazon search results for a given keyword. It's designed for educational purposes and personal use.

### Prerequisites

- Node.js (v16 or later)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-repo/amazon-scraper.git
   ```

2. **Navigate into the Project Directory:**

   ```bash
   cd amazon-scraper
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

### Running the Scraper

1. **Start the Server:**

   ```bash
   npm start
   ```

2. **Verify Server Startup:**

   Open your web browser and navigate to `http://localhost:3000`. You should see a basic message indicating the server is running.

### Scraper Endpoint

The scraper endpoint is available at `http://localhost:3000/api/scrape`. It accepts a `keyword` query parameter and returns the extracted product data in JSON format.

### Usage Example

To scrape product listings for the keyword "programming books", use the following command:

```bash
curl "http://localhost:3000/api/scrape?keyword=programming+books"
```

### Response Structure

The response from the scraper endpoint is a JSON array containing objects representing each product:

```json
[
  {
    "title": "Product Title",
    "rating": "4.5 out of 5 stars",
    "reviews": "1234 reviews",
    "imageUrl": "Product image URL"
  },
  // ... more products
]
```

### Error Handling

Errors are handled both on the backend and frontend. If the scraping fails, an error message will be returned.

### Enhancements and Considerations

1. **Robust Error Handling:** Implement more comprehensive error handling to capture and report specific error conditions (e.g., network errors, scraping errors).

2. **Rate Limiting:** Consider implementing rate limiting to prevent excessive requests and protect against abuse, especially if the scraper is exposed to public use.

3. **Pagination:** Implement pagination to handle scraping results beyond the first page of search results.

4. **Advanced Scraping Techniques:** Explore more advanced scraping techniques to extract additional product details, such as price, description, and product variants.

5. **Data Storage and Persistence:** Implement a data storage mechanism, such as a database, to save scraped data for future use or analysis.

6. **Frontend Development:** Create a frontend interface to provide a user-friendly way to interact with the scraper, input keywords, and visualize the scraped data.

7. **Deployment:** Consider deploying the scraper to a hosting platform to make it accessible remotely.

8. **Respect Robots.txt and Terms of Service:** Be mindful of Amazon's robots.txt and terms of service to ensure your scraping activities comply with their guidelines and avoid potential issues.

9. **Responsible Scraping:** Use the scraper responsibly and avoid excessive scraping that could impact Amazon's servers or user experience.

10. **Continuous Improvement:** Regularly review and improve the scraper's code, error handling, and scraping capabilities to maintain its effectiveness and adapt to changes in Amazon's website structure.
