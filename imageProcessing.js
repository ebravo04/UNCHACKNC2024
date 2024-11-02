// imageProcessing.js
function checkForReccomendations(array) {
  let reccomendations = [];
  for (let item of array) {
    if (!item.includes("lamp")) {
      reccomendations.push("lamp");
    }
  }
  return reccomendations;
}

module.exports = { checkForReccomendations };
