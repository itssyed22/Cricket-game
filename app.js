function playCricket() {
    const myRuns = Math.floor(Math.random() * 7); 
    if (myRuns === 0) {
        alert("You're out.");
    } else {
        alert(`You scored ${myRuns} runs.`);
    }
}

playCricket();
