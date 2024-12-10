var rock_logo=document.getElementById("rock-logo");
var paper_logo=document.getElementById("paper-logo");
var scissors_logo=document.getElementById("scissors-logo");

rock_logo.addEventListener("click", function() {
    rockimgDisplay();
});
const imgs = document.getElementsByClassName("player1");

function rockimgDisplay() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.backgroundImage = "url('./assets/rock-hand.png')";
        imgs[i].style.backgroundRepeat= "no-repeat";
        imgs[i].style.backgroundSize= "30vw";
    }
    var compChoice = randomImage();
    compareChoices("rock", compChoice);
}

paper_logo.addEventListener("click",function(){
    paperimgDisplay();
});
function paperimgDisplay()
{
    for(let i=0;i<imgs.length;i++)
    {
        imgs[i].style.backgroundImage="url('./assets/paper-hand.png')";
        imgs[i].style.backgroundSize="30vw";
        imgs[i].style.backgroundRepeat="no-repeat";
    }
    var compChoice = randomImage();
    compareChoices("paper", compChoice);
}

scissors_logo.addEventListener("click",function(){
    scissorimgDisplay();
});
function scissorimgDisplay()
{
    for(let i=0;i<imgs.length;i++)
    {
        imgs[i].style.backgroundImage="url('./assets/scissors-hand.png')";
        imgs[i].style.backgroundRepeat="no-repeat";
        imgs[i].style.backgroundSize="30vw";
        
    }
    var compChoice = randomImage();
    compareChoices("scissors", compChoice);
}
var images=["./assets/rock-hand.png","./assets/paper-hand.png","./assets/scissors-hand.png"];
var comp=document.getElementsByClassName("comp");
function randomImage()
{
    random= Math.floor(Math.random()*images.length);
    if(random==0){
        for(let i=0;i<comp.length;i++)
        {        
            comp[i].style.backgroundImage="url('./assets/rock-hand.png')";
            comp[i].style.backgroundRepeat="no-repeat";
            comp[i].style.backgroundSize="30vw";
        }
        return "rock";
    }
    else if(random==1)
    {
        for(let i=0;i<comp.length;i++)
        {
            comp[i].style.backgroundImage="url('./assets/paper-hand.png')";
            comp[i].style.backgroundRepeat="no-repeat";
            comp[i].style.backgroundSize="30vw";
        }
        return "paper";
    }
    else{
        for(let i=0;i<comp.length;i++)
        {
            comp[i].style.backgroundImage="url('./assets/scissors-hand.png')";
            comp[i].style.backgroundRepeat="no-repeat";
            comp[i].style.backgroundSize="30vw";
        }
        return "scissors";
    }
}
var compScore=0;
var playerScore=0;
var player1_score=document.getElementById("player1-score");
var computer_score=document.getElementById("comp-score");
var text=document.getElementById("text");
var logos=document.getElementById("logo");
var btn=document.querySelectorAll(".btn");
function compareChoices(playerChoice,compChoice)
{
    if((playerChoice === "rock" && compChoice === "paper") ||
    (playerChoice === "paper" && compChoice === "scissors") ||
    (playerChoice === "scissors" && compChoice === "rock"))
    {
        compScore++;
    }
    else if((playerChoice === "paper" && compChoice === "rock") ||
    (playerChoice === "scissors" && compChoice === "paper") ||
    (playerChoice === "rock" && compChoice === "scissors"))
    {
        playerScore++;
    }
    computer_score.textContent=compScore;
    player1_score.textContent=playerScore;
    if (compScore == 5) {
        for (let i = 0; i < btn.length; i++) {
            btn[i].style.display = "inline";
            btn[i].style.marginLeft = "45%";
        }
        logos.style.display = "none";
        text.textContent = "Comp won the game";
    } 
    else if (playerScore == 5)
    {
        for (let i = 0; i < btn.length; i++) {
            btn[i].style.display = "inline";
            btn[i].style.marginLeft = "45%";
        }
        logos.style.display = "none";
        text.textContent = "You won the game";
    }
}



