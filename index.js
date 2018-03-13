//dori, nori, ori, oin, gloin, fili, kili, bifur, bofur, bombur, dwalin, balin, and thorin oakenshield.
function dwarfRollCall(dwarves) {
  var newDwarves = [];
  var lastHalf = dwarves.splice(dwarves.length / 2)
  for(let i = 0; i < lastHalf.length; i++) {
    newDwarves.push(`${i + 1}. ${lastHalf[i]}`);
  } 
    newDwarves.push('');
    return newDwarves.join(' ');
}
var dudes = ['bro', 'brah', 'bruh'];
console.log(dwarfRollCall(dudes));

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
  var cheese = ['gouda', 'cheddar', 'camembert', 'swiss'];
  var message = 'no cheese!';
  
  for (let i = 0; i < foods.length; i++) {
      if (foods[i] === cheese[i]) {
        firstCheese.push(foods[i]);
        return firstCheese;
      }
    
    } 
        return 'no cheese!'
   
   
  
}

function wordsWithB(words) {
  var bWords = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith('b')) {
      bWords.push(words[i])
    }
  } return bWords;
}