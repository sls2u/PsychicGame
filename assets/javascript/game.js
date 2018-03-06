var playerGuessLetters = []; //array to push choices to
var computerWord = ["array", "pseudocode", "syntax", "function", "loop", "javascript", 'artefact', 'redocumentation', 'boolean']; //array for random computer word choice
var gusessLeft = 10; //assign amount of guesses player has left
var gusessSoFar = []; //array to push user choices to
var wins = 0; //self expanitory
var lossess = 0;


//   var playerGuessLetters =(event.keyCode);
//    console.log(playerGuessLetters)
//   //get choice from computer and create an array that lists options and randomly choose a word
//   //array for random computer word choice

  // Getting user input and storing  for key pressed
  document.onkeyup = function(event){
    console.log("onkeyup:" + event.key);
    compareLetters(event.key);
    window.alert ("hello");

  }
  // This clears up all the variables from the previous game and picks a new random word
  function startGame(){
    randomWord = varWords[Math.floor(Math.random() * varWords.length)];
    guessedLetters = "";
    usedLetters = "";
    wrongLetters = 0;

  }
  //computer to select randomWord and output that word
  function selectRandomWord() {
    var randomWord = ["array", "pseudocode", "syntax", "function", "loop", "javascript", 'artefact', 'redocumentation', 'boolean'];
    wordNumber = [Math.floor(Math.random() * randomWord.length)];
    return randomWord[wordNumber];

    }
