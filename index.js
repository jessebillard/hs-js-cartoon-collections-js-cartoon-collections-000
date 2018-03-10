//cuidado amigos
function dwarfRollCall(dwarves) {
  var newDwarves = [];
  for(let i = 0; i < dwarves.length; i++) {
    newDwarves.push(`${i + 1}. ${dwarves[i]}`);
  } var lastDwarf = newDwarves[newDwarves.length -1] + ' ' ;
    newDwarves.splice(-1);
    newDwarves.push(lastDwarf);
    return newDwarves.join(' ');
}


//HE HATH BEEN SUMMONED!
function summonCaptainPlanet(planeteerCalls){
  var newPlaneteerCalls = [];
  for(let i = 0; i < planeteerCalls.length; i++) {
    newPlaneteerCalls.push(`${planeteerCalls[i].toUpperCase()}!`);
  }
  return newPlaneteerCalls;
}

// siiiiickkkkkkk
function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
        return false;
    }
  }
}

// PLS CHEESE PLS
function findTheCheese (foods) {
  var firstCheese = [];
  var cheese = ['gouda', 'cheddar', 'camembert'];
  var message = 'no cheese!';
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === cheese[i]) {
      firstCheese.push(foods[i]);
      return firstCheese;
    } 
  }  
  for (let j = 0; j < foods.length; j++) {
    if (foods[j] !== cheese[j]) {
      return message;
    }
  }
  
}