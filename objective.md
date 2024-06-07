```markdown
# Objective: Create a Simple Script to Scrape Amazon Product Listings

## Task Requirements:

### Backend/API (Node.js):
1. **Set up a Node.js project with the necessary dependencies:**
   - Install `express`, `axios`, and `jsdom`.

2. **Write a script using axios to fetch the contents of the Amazon search results page for a given keyword.**

3. **Use JSDOM to parse the HTML content and extract the following details for each product listing on the first page:**
   - Product Title
   - Rating (stars out of five)
   - Number of reviews
   - Product image URL

4. **Create an endpoint `/api/scrape` where a GET request with a query parameter `?keyword=yourKeyword` initiates the scraping process and returns the extracted data in JSON format.**

### Frontend (HTML, CSS, Vanilla JavaScript):
1. **Develop a simple webpage with:**
   - An input field to enter the search keyword.
   - A button to initiate the scraping process.

2. **Style the webpage to be user-friendly and presentable.**

3. **Implement JavaScript to make an AJAX call to the backend endpoint when the button is clicked, and display the results formatted cleanly on the page.**

### Documentation:
1. **Provide comments within your code to offer clarity on your logic and process.**

2. **Include a `README.md` file with the setup and running instructions.**

### Considerations:
1. **Ensure you handle errors gracefully both on the backend and frontend.**

2. **Provide clear instructions on how to run the application.**

3. **The cleaner and more functional the code is, the better.**

## Setup and Running Instructions

### Backend Setup
1. Initialize a Node.js project:
   ```sh
   npm init -y
   ```
2. Install the necessary dependencies:
   ```sh
   npm install express axios jsdom
   ```

3. Create a script to scrape Amazon product listings using axios and jsdom.

4. Set up an Express server with an endpoint `/api/scrape` to handle GET requests and return scraped data.

### Frontend Setup
1. Create a simple HTML file with:
   - An input field for the search keyword.
   - A button to start the scraping process.

2. Style the HTML file with CSS to make it user-friendly.

3. Implement JavaScript to handle the button click, make an AJAX call to the backend, and display the results.

### Running the Application
1. Start the backend server:
   ```sh
   node yourServerFile.js
   ```

2. Open the HTML file in a web browser.

3. Enter a keyword in the input field and click the button to see the scraped Amazon product listings.

### Error Handling
- Ensure the backend handles errors such as network issues or invalid responses gracefully.
- Ensure the frontend provides user feedback for errors like empty input or failed AJAX calls.

### Code Comments
- Add comments in your backend and frontend code to explain the logic and flow of the application.

### Additional Notes
- The project should handle edge cases such as no search results or malformed HTML gracefully.
- Aim for clean, readable, and maintainable code.
```

This markdown file provides a clear, structured overview of the project requirements, setup instructions, and considerations, making it easy to follow and implement.