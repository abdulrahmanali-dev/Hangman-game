// get the letters

let letters = "abcdefghijklmnopqrstuowxyz";

// create an array from letters
lettersArray = Array.from(letters);

// select Letters container
let lettersContainer = document.querySelector(".letters");

// Generate Letters

lettersArray.forEach((letter) => {
  let span = document.createElement("span");

  // create letter text node
  let theLetter = document.createTextNode(letter);

  // append letter text to letter box
  span.append(theLetter);

  // add class to the span
  span.className = "letter-box";
  lettersContainer.appendChild(span);
});


// set the game words
let words = {
  programming: ["php", "sass", "Javascript", "HTML", "css", "React js"],
  people: ["Abdulrahman ali", "osama elzero", "khalid", "walid", "ahmed"],
  leaders: [
    "Abdulrahman ali",
    "Khalid ibn Alwalid",
    "alexander not the great",
    "marcus auralios",
  ],
  sports: [
    "calisthencs",
    "lifting weights",
    "soccer",
    "Basket Ball",
    "FootBall",
  ],
};

// get all keys

let allKeys = Object.keys(words);

// get random number based on catagory length

let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// get catagory

let catagoryName = allKeys[randomPropNumber];

// get into the words throgh catagory name
let randomPropValue = words[catagoryName];

// get the Choosen Word
let randomPropValueValue = randomPropValue[randomPropNumber];

document.querySelector(".game-info .catagory span").innerHTML = catagoryName;

//Select letter guess element

let letterGuess = document.querySelector(".letters-guess");

// create an array from the word

let lettersAndSpace = Array.from(randomPropValueValue);
console.log(lettersAndSpace);

lettersAndSpace.forEach((letter) => {
  // create empty Span
  let emptySpan = document.createElement("span");

  if (letter == " ") {
    emptySpan.className = "with-space";
  }

  //append span to letterGuess
  letterGuess.appendChild(emptySpan);
});

// Select guess spans

let allGuessSpans = document.querySelectorAll(".letters-guess span");

// set wrong Attmepts
let wrongAttempts = 0;

// select the Draw Element
let theDraw = document.querySelector(".hangman-draw");

// Handle clicking On letters
document.addEventListener("click", (e) => {
  // Set the chose Status
  let theStatus = false;

  // find the letter box
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    // get clicked letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    // get the chosen word
    let theChosenWord = Array.from(randomPropValueValue.toLowerCase());

    // loop on all the letters of the given word

    theChosenWord.forEach((wordLetter, wordIndex) => {
      // Check If the Clicked Letter equal to one o the word Letters
      if (wordLetter === theClickedLetter) {
        theStatus = true;

        console.log("ok found at " + wordIndex);

        // create the chosen letter if its right

        allGuessSpans[wordIndex].innerHTML = wordLetter;
      }
    });

    // Outside loop

    // if Letter is wrong
    if (theStatus === false) {
      // increase the wrong attempts number if the letter is wrong
      wrongAttempts++;
      // add class list to the drow to disply the hangman parts
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      // play fail sound when the letter is wrong
      // document.getElementById("fail").play();

      // check i the game is ended
      if (wrongAttempts == 8) {
        // add finished class to letters container

        lettersContainer.classList.add("finished");

        // trigger end game function

        endGame();
      }
    } else {
      // play success sound when the letter is right
      // document.getElementById("success").play();
    }
  }
});

function endGame() {
  // create pop up

  // popup div
  let popup = document.createElement("div");

  // add class name to popup
  popup.className = "popup";

  // create popup text
  if (wrongAttempts === 8) {
    popup.append(
      document.createTextNode(`Game over, The Word Is ${randomPropValueValue}`)
    );
  }

  document.body.appendChild(popup);
}
