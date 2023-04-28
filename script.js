var prizeCup = Math.floor(Math.random() * 3) + 1;
var cupsChosen = 0;

function chooseCup(cupNumber) {
  if (cupsChosen >= 3) {
    return; // ignore clicks if all cups have been chosen
  }
  
  cupsChosen++;
  
  var cupElement = document.getElementById("cup" + cupNumber);
  
  if (cupNumber === prizeCup) {
    cupElement.innerHTML = "🎁";
    document.getElementById("result-message").innerHTML = "Selamat! anda mendapatkan 👅🍆💦 dari ardi!";
  } else {
    cupElement.innerHTML = "❌";
    document.getElementById("result-message").innerHTML = "Yah, anda hanya mendapatkan 😘 dari ardi!";
  }
  
  if (cupsChosen === 3) {
    // disable all cups after three have been chosen
    var cups = document.getElementsByClassName("cup");
    for (var i = 0; i < cups.length; i++) {
      cups[i].style.cursor = "default";
    }
  }
}

