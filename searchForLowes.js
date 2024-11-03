const puppeteer = require("puppeteer");

async function searchLowesForProducts(array) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const searchResults = [];

  for (let i = 0; i < array.length; i++) {
    const searchQuery = array[i];
    await page.goto(`https://www.lowes.com/search?searchTerm=${searchQuery}`);

    const results = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll(".grid-container"));
      return items.slice(0, 3).map((item) => {
        // Limit to first 3 items
        const title = item.querySelector(".product-title")?.textContent.trim();
        const price = item.querySelector(".price")?.textContent.trim();
        const link = item.querySelector("a")?.href;
        return { title, price, link };
      });
    });

    searchResults.push({ searchQuery, results });
  }

  await browser.close();
  return searchResults;
}

module.exports = { searchLowesForProducts };
