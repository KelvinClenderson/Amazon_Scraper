# Amazon Scraper 
This is a simple scraper for the Amazon.com website, it was created based on a technical challenge imposed by a Backend internship vacancy
## Overview

This project provides a basic scraper to extract product listings from the first page of Amazon search results for a given keyword. It's designed for educational purposes and personal use.

### Prerequisites

- Node.js (v16 or later)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/KelvinClenderson/Amazon_Scraper.git
   ```

2. **Navigate into the Project Directory:**

   ```bash
   cd Amazon_Scraper
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

### Running the Scraper

1. **Start the Server:**
   ```bash
   npm run start:dev
   ```
2. **Start the Watch Server:**
   ```bash
   npm run start:server:watch
   ```
3. **Verify Server Startup:**

   Open your web browser and navigate to `http://localhost:4000`. You should see a basic message indicating the server is running.

### Scraper Endpoint

The scraper endpoint is available at `http://localhost:4000/api/scrape`. It accepts a `keyword` query parameter and returns the extracted product data in JSON format.

### Usage Example

To scrape product listings for the keyword "programming books", use the following command:

```bash
curl "http://localhost:4000/api/scrape?keyword=programming+books"
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
