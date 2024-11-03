// imageProcessing.js
function checkForReccomendations(array) {
  let reccomendations = [];
  
  //this is checking
  if(array.some((item) => item.includes("desk")) && array.some((item) => item.includes("indoor"))) {
    if (!array.some((item) => item.includes("lamp"))) {
    reccomendations.push("lamp");
  }
    if (!array.some((item) => item.includes("chair"))) {
    reccomendations.push("chair");
  }
    if (!array.some((item) => item.includes("computer"))) {
    reccomendations.push("computer");
  }
    if (!array.some((item) => item.includes("keyboard"))) {
    reccomendations.push("keyboard");
  }
    if (!array.some((item) => item.includes("organizer"))) {
    reccomendations.push("organizer");
  }
}

if(array.some((item) => item.includes("bedroom")) && array.some((item) => item.includes("indoor"))) {
  if (!array.some((item) => item.includes("bed"))) {
  reccomendations.push("bed");
}
  if (!array.some((item) => item.includes("lamp"))) {
  reccomendations.push("lamp");
}
  if (!array.some((item) => item.includes("nightstand"))) {
  reccomendations.push("nightstand");
}
  if (!array.some((item) => item.includes("dresser"))) {
  reccomendations.push("dresser");
}
  if (!array.some((item) => item.includes("mirror"))) {
  reccomendations.push("mirror");
}
}

if(array.some((item) => item.includes("kitchen")) && array.some((item) => item.includes("indoor"))) {
    if (!array.some((item) => item.includes("table"))) {
    reccomendations.push("table");
  }
    if (!array.some((item) => item.includes("chair"))) {
    reccomendations.push("chair");
  }
    if (!array.some((item) => item.includes("stove"))) {
    reccomendations.push("stove");
  }
    if (!array.some((item) => item.includes("refrigerator"))) {
    reccomendations.push("refrigerator");
  }
    if (!array.some((item) => item.includes("microwave"))) {
    reccomendations.push("microwave");
  }
}

if(array.some((item) => item.includes("house")) && array.some((item) => item.includes("indoor"))) {
  if (!array.some((item) => item.includes("couch"))) {
    reccomendations.push("couch");
  }
  if (!array.some((item) => item.includes("plant"))) {
    reccomendations.push("plant");
  }
  if (!array.some((item) => item.includes("rug"))) {
    reccomendations.push("rug");
  }
  if (!array.some((item) => item.includes("vase"))) {
    reccomendations.push("vase");
  }
  if (!array.some((item) => item.includes("coffee table"))) {
    reccomendations.push("coffee table");
  }
}

if(array.some((item) => item.includes("bathroom")) && array.some((item) => item.includes("indoor"))) {
  if (!array.some((item) => item.includes("Over-the-Toilet Storage"))) {
    reccomendations.push("Over-the-Toilet Storage");
  }
  if (!array.some((item) => item.includes("Freestanding Linen Cabinet"))) {
    reccomendations.push("Freestanding Linen Cabinet");
  }
  if (!array.some((item) => item.includes("waste basket"))) {
    reccomendations.push("weast basket");
  }
  if (!array.some((item) => item.includes("mirror"))) {
    reccomendations.push("mirror");
  }
  if (!array.some((item) => item.includes("towel rack"))) {
    reccomendations.push("towel rack");
  }
}



  if(array.some((item) => item.includes("outdoor")) && array.some((item) => item.includes("pool"))) {
    if (!array.some((item) => item.includes("pool chemical dispenser"))) {
      reccomendations.push("pool chemical dispenser");
    }
  }

  if(array.some((item) => item.includes("property")) && array.some((item) => item.includes("yard"))) { 
    if (!array.some((item) => item.includes("pergola"))) {
      reccomendations.push("pergola");
    }
    if (!array.some((item) => item.includes("fire pit"))) {
      reccomendations.push("fire pit");
    }
    if (!array.some((item) => item.includes("grill"))) {
      reccomendations.push("grill");
    }
    if (!array.some((item) => item.includes("outdoor dining"))) {
      reccomendations.push("outdoor dining");
    }
    if (!array.some((item) => item.includes("outdoor seating"))) {
      reccomendations.push("outdoor seating");
    }
    if (!array.some((item) => item.includes("outdoor lighting"))) {
      reccomendations.push("outdoor lighting");
    }
    if (!array.some((item) => item.includes("patio heater"))) {
      reccomendations.push("patio heater");
    }
  }

  if(array.some((item) => item.includes("entrance")) && array.some((item) => item.includes("porch"))) { 
    if (!array.some((item) => item.includes("rocking chair"))) {
      reccomendations.push("pergola");
    }
    if (!array.some((item) => item.includes("plants"))) {
      reccomendations.push("plants");
    }
    if (!array.some((item) => item.includes("grill"))) {
      reccomendations.push("grill");
    }
    if (!array.some((item) => item.includes("rocking chair"))) {
      reccomendations.push("rocking chair");
    }
    if (!array.some((item) => item.includes("swing"))) {
      reccomendations.push("swing");
    }
  }




  return reccomendations;
}

module.exports = { checkForReccomendations };
