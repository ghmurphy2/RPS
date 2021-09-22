



var choicePrompt = prompt("Choose Rock, Paper, or Scissors." );

choiceOptions = ["Rock", "Paper", "Scissors"];
 
const randomChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];

console.log(randomChoice)

var comparison = function (randomChoice , input) {
    If (randomChoice == input)
    alert3("You tied!")
}

if (randomChoice === "Scissors") {
    if(choicePrompt === "Rock") {
        alert("You win.")};
    }else{ if (choicePrompt === "Paper");
        alert("You lose.")};

if (randomChoice === "Paper") {
     if(choicePrompt === "Scissors") {
                alert("You win.")};
     }else{ if (choicePrompt === "Rock");
                alert("You lose.")};

 if (randomChoice === "Rock") {
        if(choicePrompt === "Paper") {
                    alert("You win.")};
        }else{ if (choicePrompt === "Scissors");
                    alert("You lose.")};

// var score alert lose, alert win Score1 l Score2 
