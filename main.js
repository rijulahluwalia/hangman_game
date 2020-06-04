let alphabet = "qwertyuiopasdfghjklzxcvbnm";
let count = 1;

function updateHiddenLetters(letter, word) {
  let locations = [];

  word.split("").forEach((char, index) => {
    if (char === letter) {
      locations.push(index);
    }
  });

  for (let i = 0; i < locations.length; i++) {
    document.getElementById(locations[i]).append(letter);
  }
}

function printHiddenLetters(word) {
  for (let i = 0; i < word.length; i++) {
    let letter = document.createElement("P");
    letter.id = [i];
    letter.style.margin = "20px";
    letter.style.fontSize = "30px";
    letter.style.width = "30px";
    letter.style.height = "30px";
    letter.style.padding = "5px";
    letter.style.backgroundColor = "#58D68D";
    letter.style.textAlign = "center";
    letter.style.fontFamily = "Arial";
    document.getElementById("hiddenLetters").append(letter);
  }
}

function printButtons(word) {
  for (let i = 0; i < alphabet.length; i++) {
    let btn = document.createElement("BUTTON");
    btn.innerHTML = alphabet[i];
    btn.id = alphabet[i];
    btn.style.height = "50px";
    btn.style.width = "50px";
    btn.style.fontSize = "25px";
    btn.style.padding = "1px";
    btn.style.marginRight = "10px";

    document.getElementById("letters").append(btn);
    document.getElementById(alphabet[i]).onclick = function () {
      guessWord(i, btn, word);
    };
  }
}

function updateImage(count) {
  return "Layer" + count + ".png";
}
function guessWord(index, btn, word) {
  // if it is an incorrect letter
  if (!word.includes(alphabet[index])) {
    // check if count is 12 and if it is then don't increment the count.
    if (count < 13) {
      document.getElementById("hangmanImage").src = updateImage(count);
      updateButton(btn, false);
      count++;
    } else {
      document.getElementById("hangmanImage").src = "deadmsg.jpg";
    }
  }
  // else if it is a correct letter
  else {
    updateHiddenLetters(btn.id, word);
    updateButton(btn, true);
  }
}

function updateButton(btn, correct) {
  btn.disabled = true;
  btn.style.backgroundColor = correct ? "#58D68D" : "#F1948A ";
  btn.style.color = "white";
  btn.style.opacity = "0.7";
}

function onStart() {
  let word = document.getElementById("wordText").value.toLowerCase();
  printButtons(word);
  addBorders(); // delete this
  printHiddenLetters(word);
  document.getElementById("startup").remove();
}
// Move all of this to css
function addBorders() {
  let letters = document.getElementById("letters");
  letters.style.border = "6px";
  letters.style.borderStyle = "solid";
  letters.style.width = "550px";
  letters.style.height = "200px";
  letters.style.borderLeftColor = "white";
  letters.style.borderTopColor = "white";
  letters.style.borderBottomColor = "white";
  letters.style.borderRightColor = "black";
  letters.style.marginRight = "auto";
}
