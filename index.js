const express = require("express");
const path = require("path");
const Clarifai = require("clarifai");
const imageProcessing = require("./imageProcessing");
const { apiKey } = require("./config");
const multer = require("multer");
const fs = require("fs");

const app = express();
const upload = multer({ dest: "uploads/" });

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
app.get("/imgIn", (req, res) => {
  res.render("imgIn/index");
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
    const imageFilePath = req.file.path;

    // Convert the image to base64
    const imageBytes = fs.readFileSync(imageFilePath, { encoding: "base64" });

    // Analyze the image using Clarifai's general model
    const response = await clarifaiApp.models.predict(Clarifai.GENERAL_MODEL, {
      base64: imageBytes,
    });

    // Extract detected concept names
    const detectedItems = response.outputs[0].data.concepts.map(
      (concept) => concept.name
    );

    // Remove the uploaded file after processing
    fs.unlinkSync(imageFilePath);

    const reccomendation =
      imageProcessing.checkForReccomendations(detectedItems);

    console.log("Detected items:", detectedItems);
    console.log("Reccomendation:", reccomendation);

    // Send back the array of detected item names
    res.json({ detectedItems });
  } catch (error) {
    console.error("Error analyzing image:", error);
    res.status(500).json({ error: "Failed to analyze image" });
  }
});
