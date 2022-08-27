const WIN = true;
const LOST = false;
const DRAW = null;

let rounds;
if(!rounds)rounds=5;
let buttons = document.querySelectorAll("button")
let candles = document.getElementsByClassName("scorebox");
let status = document.getElementsByClassName("status");
let playerWins = 0;
let computerWins = rounds - 1;

function computerChoice(max)
{
    return Math.floor(Math.random()*max);
}

function round(playerChoice, computerChoice)
{
    if(playerChoice == 1)
    {
        if(computerChoice == 1) return;
        else if(computerChoice == 2)
        {
            computerWins--;
        } 
        else 
        {
            playerWins++;
        }
    }
    else if(playerChoice == 2)
    {
        if(computerChoice == 1) 
        {
            playerWins++;
        }
        else if(computerChoice == 2) return;
        else 
        {
            computerWins--;
        }
    }
    else
    {
        if(computerChoice == 1)
        {
            computerWins--;
        }
        else if(computerChoice == 2)
        {
            playerWins++;
        }
        else return;
    }
}

buttons[0].addEventListener('click',()=>
{
    round(1,computerChoice(5) % 3); 
    if(playerWins>rounds/2)
    {
        alert("Win");
    }
    if(computerWins<rounds/2 - 1 )
    {
        alert("Lose");
    }
});

buttons[1].addEventListener('click',()=>
{
    round(2,computerChoice(5) % 3); 
    if(playerWins>rounds/2)
    {
        alert("Win");
    }
    if(computerWins<rounds/2)
    {
        alert("Lose");
    }
});

buttons[2].addEventListener('click',()=>
{
    round(3,computerChoice(5) % 3); 
    if(playerWins>rounds/2)
    {
        alert("Win");
    }
    if(computerWins<rounds/2)
    {
        alert("Lose");
    }
});

function game(rounds = 5)
{
    let playerWins = 0;
    let computerWins = 0;
    let choice;
    let play;
    while(true)
    {
        if(playerWins + computerWins == rounds)
        {
            if(playerWins == computerWins) return DRAW;
            else if(playerWins > computerWins) return WIN;
            else return LOST;
        }
        else if(playerWins >= rounds/2) return WIN;
        else if(computerWins >= rounds/2)return LOST;

        choice = prompt("Rock, Paper or Scissors? (0, 1 ,2)");

        play = round(choice, computerChoice(5) % 3);
        if(play === null)alert("Round: Draw");
        else if(play)
        {
            alert("Round: Won");
            playerWins++;
        }
        else
        {
            alert("Round: Lost");
            computerWins++;
        }
    }
}
