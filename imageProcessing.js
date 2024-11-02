export function checkForReccomendations(array) {
  const reccomendations = [];
  for (let item of array) {
    if (!item.includes("lamp")) {
      reccomendations.push("lamp");
    }
  }
  return reccomendations;
}
