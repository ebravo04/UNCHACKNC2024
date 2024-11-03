const puppeteer = require("puppeteer");

async function searchLowesForProducts(array) {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      "--disable-blink-features=AutomationControlled",
      "--start-maximized",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-http2", // Disable HTTP/2
    ],
  });

  const page = await browser.newPage();
  //   await page.setUserAgent(
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36"
  //   );

  const searchResults = [];

  for (let i = 0; i < array.length; i++) {
    const searchQuery = array[i];
    await page.goto(`https://www.lowes.com/search?searchTerm=${searchQuery}`, {
      waitUntil: "networkidle2",
    });

    // Wait for the main product container to load
    await page.waitForSelector(".sc-o9wle2-4.hooJDt.tile_group");

    // Scrape the product details
    const results = await page.evaluate(() => {
      const items = Array.from(
        document.querySelectorAll(".sc-o9wle2-4.hooJDt.tile_group")
      );

      // Limit to three items and map their details
      return items.slice(0, 3).map((item) => {
        const title =
          item
            .querySelector("[data-description]")
            ?.getAttribute("data-description") ||
          item
            .querySelector(".titl-cnt.titl.brnd-desc .description-spn")
            ?.textContent.trim();

        // Extract price if available
        const priceContainer = item.querySelector(".prdt-actl-pr");
        const price = priceContainer
          ? priceContainer
              .getAttribute("aria-label")
              ?.replace("Actual Price ", "")
              .trim() || priceContainer.textContent.trim()
          : "Price not found";

        const link = item.querySelector(
          "a[data-clicktype='product_tile_click']"
        )?.href;

        return { title, price, link };
      });
    });

    searchResults.push({ searchQuery, results });
  }

  await browser.close();
  return searchResults;
}

module.exports = { searchLowesForProducts };
