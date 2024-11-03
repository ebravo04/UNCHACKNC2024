const express = require("express");
const path = require("path");
const Clarifai = require("clarifai");
const imageProcessing = require("./imageProcessing");
const { apiKey, secret } = require("./config");
const multer = require("multer");
const fs = require("fs");
const { searchLowesForProducts } = require("./searchForLowes");
const session = require("express-session");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(
  session({
    secret: secret, // Change this to a secure key in production
    resave: false,
    saveUninitialized: true,
  })
);

// Set the views directory
app.set("views", path.join(__dirname, "views"));

const clarifaiApp = new Clarifai.App({
  apiKey: apiKey,
});

// Set the view engine to ejs
app.set("view engine", "ejs");

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Route to render the index.ejs file
app.get("/", (req, res) => {
  res.render("imgIn/index");
});
app.get("/result", (req, res) => {
  res.render("result");
});

app.get("/test-clarifai", async (req, res) => {
  try {
    const response = await clarifaiApp.models
      .initModel({
        id: Clarifai.GENERAL_MODEL,
      })
      .then((generalModel) => {
        return generalModel.predict(
          "https://samples.clarifai.com/metro-north.jpg"
        );
      });

    console.log("Clarifai API response:", response);
    res.json({ success: true, response });
  } catch (error) {
    console.error("Error testing Clarifai API:", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to connect to Clarifai API" });
  }
});

app.post("/analyze-image", upload.single("imageFile"), async (req, res) => {
  try {
    console.log("File received:", req.file);
    const imageFilePath = req.file.path;

    // Convert the image to base64
    console.log("Converting image to base64...");
    const imageBytes = fs.readFileSync(imageFilePath, { encoding: "base64" });
    const base64Image = `data:image/jpeg;base64,${imageBytes}`;

    // Analyze the image using Clarifai's general model
    console.log("Analyzing image with Clarifai...");
    const response = await clarifaiApp.models.predict(Clarifai.GENERAL_MODEL, {
      base64: imageBytes,
    });

    console.log("Clarifai response:", response);

    // Extract detected concept names
    const detectedItems = response.outputs[0].data.concepts.map(
      (concept) => concept.name
    );

    console.log("Detected items:", detectedItems);

    // Remove the uploaded file after processing
    fs.unlinkSync(imageFilePath);

    const recommendation =
      imageProcessing.checkForReccomendations(detectedItems);
    const searchResults = await searchLowesForProducts(recommendation);

    console.log("Recommendation:", recommendation);
    console.log("Search results:", JSON.stringify(searchResults, null, 2));

    // Render the results page with all data
    res.render("result", {
      userImage: base64Image,
      detectedItems,
      recommendation,
      searchResults,
    });
  } catch (error) {
    console.error("Error analyzing image:", error);
    res
      .status(500)
      .json({ error: "Failed to analyze image", details: error.message });
  }
});
