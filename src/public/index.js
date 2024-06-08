document.getElementById("scrapeButton").addEventListener("click", async () => {
  const keyword = document.getElementById("keyword").value;
  if (!keyword) {
    alert("Please enter a keyword");
    return;
  }

  const convertKeyword = keyword.replace(/\s+/g, "+").toLowerCase();

  try {
    const response = await fetch(
      `/api/scrape?keyword=${encodeURIComponent(convertKeyword)}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const products = await response.json();

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (products.error) {
      resultsDiv.innerHTML = `<p>${products.error}</p>`;
      return;
    }

    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>Rating: ${product.rating}</p>
        <p>Reviews: ${product.reviewCount}</p>
      `;
      resultsDiv.appendChild(productDiv);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `<p>Failed to fetch products. Please try again later.</p>`;
  }
});
