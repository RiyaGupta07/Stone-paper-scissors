let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const body=document.querySelector("body");
const userScorePara=document.querySelector("#userscore");
const compScorePara=document.querySelector("#computerscore");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const rndmidx=Math.floor(Math.random()*3);
    return options[rndmidx];
    //rock,paper,scissors
}
const drawGame=()=>{
    console.log("Game was Draw");
    msg.innerText="Its a Draw . Play again";
    body.style.backgroundColor="#82d8faff";
    
}
const showWinner=(userWin)=>{
   if(userWin){
    userscore++;
    userScorePara.innerText=userscore;
     console.log("You win");
     msg.innerText="You Win";
     body.style.backgroundColor="#82faa0ff";
   }
   else{
    console.log("You lose");
    computerscore++;
    compScorePara.innerText=computerscore;
    msg.innerText="You lose";
    body.style.backgroundColor="#ff1919ff";
   }
}
const playGame=(userChoice)=>{
   console.log("user choice =",userChoice)
   //generate computer choice->modular
   const compChoice=genCompChoice();
   console.log("comp choice =",compChoice);

   if(userChoice===compChoice){
    drawGame();
   } else{
    let userwin=true;
    if(userChoice==="rock"){
        userwin=compChoice==="paper"? false:true;
    }
    else if(userChoice==="paper"){
        userwin= compChoice==="scissors"? false:true;
    }
    else{
        userwin=compChoice==="rock"?false:true;
    }
    showWinner(userwin);
   }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
