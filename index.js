const knapper = document.querySelectorAll(".knapper button");
const resetKnap = document.querySelector("#resetKnap")

const brugerScore = document.getElementById("user-score")
const computerScore = document.getElementById("computer-score")

const resultElement = document.getElementById("result")
const vinderElement = document.getElementById("vinder")

const runderSpillet = document.getElementById("rundeNr")

let uScore = 0;
let cScore = 0;
let runderSpilletLet = 0;

knapper.forEach((knap) => {
    knap.addEventListener("click", () => {
        runderSpilletLet++;
        const result = spilRunde(knap.id, computerValg())
        resultElement.textContent = result;
        runderSpillet.textContent = runderSpilletLet;
        

          if(uScore === 5 ){
            deaktiverKnapper();
            vinderElement.textContent = "Spilleren vandt!";
        } else if(cScore === 5){
            deaktiverKnapper();
            vinderElement.textContent = "Computeren vandt!";
        }
    
    })
});

resetKnap.addEventListener("click", () =>{
    uScore = 0;
    cScore = 0;

    brugerScore.textContent = uScore;
    computerScore.textContent = cScore;

    resultElement.textContent = "";
    vinderElement.textContent = "";

    aktiverKnapper();

    runderSpilletLet = 0;
    runderSpillet.textContent = 0;
})

function computerValg() {
    const valg = ['sten', 'saks', 'papir']
    const randomtValg = Math.floor(Math.random() * valg.length)
    return valg[randomtValg]
}


function spilRunde(brugerValg, computerValg) {
    if (brugerValg === computerValg) {
        return "I har valgt det samme!"
    } else if (
        (brugerValg === "sten" && computerValg === "saks") ||
        (brugerValg === "saks" && computerValg === "papir") ||
        (brugerValg === "papir" && computerValg === "sten")
    ) {
        uScore++;
        brugerScore.textContent = uScore;
        return "Du vinder! " + brugerValg + " slår " + computerValg + "!";

    } else {
        cScore++;
        computerScore.textContent = cScore;
        return "Du taber! " + computerValg + " slår " + brugerValg + "!";
    }
}

function deaktiverKnapper (){
    knapper.forEach((knap)=> {
        knap.disabled = true;
    })
}

function aktiverKnapper (){
    knapper.forEach((knap) => {
        knap.disabled = false;
    })
}