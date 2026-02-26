const runGame = function() {
    // prompt user for team names and scores
    const team1 = prompt("Enter the name of the first team:");
    const score1 = parseInt(prompt("Enter the score for " + team1 + ":"), 10);
    
    
    console.log("Team 1: " + team1 + ", Score: " + score1);
    
    const team2 = prompt("Enter the name of the second team:");
    const score2 = parseInt(prompt("Enter the score for " + team2 + ":"), 10);

    // determine result string
    let result;
    if (isNaN(score1) || isNaN(score2) || !team1 || !team2) {
        result = "Invalid input provided.";
    } else if (score1 > score2) {
        result = team1 + " won " + score1 + " to " + score2 + ".";
    } else if (score2 > score1) {
        result = team2 + " won " + score2 + " to " + score1 + ".";
    } else {
        result = "The game between " + team1 + " and " + team2 + " ended in a tie, " + score1 + " to " + score2 + ".";
    }
    

    // Code that adds a new paragraph with a string to the "div" in the HTML file 
    const divId = document.getElementById("results");
    const newPara = document.createElement("p");
    newPara.textContent = result;
    divId.appendChild(newPara);
}
