// imageProcessing.js
function checkForReccomendations(array) {
  if (!array.some((item) => item.includes("lamp"))) {
    return ["lamp"];
  }
  return [];
}

module.exports = { checkForReccomendations };
