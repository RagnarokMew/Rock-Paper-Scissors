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

let scores = document.getElementsByClassName("counter");

function computerChoice(max)
{
    return Math.floor(Math.random()*max);
}

function lightup(candle)
{
    const fire = document.createElement('img');
    fire.src='Images/Candle-top.png';
    candles[candle].appendChild(fire);
}

function round(playerChoice, computerChoice)
{
    if(playerChoice == 1)
    {
        if(computerChoice == 1) return;
        else if(computerChoice == 2)
        {
            lightup(computerWins);
            computerWins--;
            scores[1].textContent=rounds-computerWins-1;
        } 
        else 
        {
            lightup(playerWins);
            playerWins++;
            scores[0].textContent=playerWins;
        }
    }
    else if(playerChoice == 2)
    {
        if(computerChoice == 1) 
        {
            lightup(playerWins);
            playerWins++;
            scores[0].textContent=playerWins;
        }
        else if(computerChoice == 2) return;
        else 
        {
            lightup(computerWins);
            computerWins--;
            scores[1].textContent=rounds-computerWins-1;
        }
    }
    else
    {
        if(computerChoice == 1)
        {
            lightup(computerWins);
            computerWins--;
            scores[1].textContent=rounds-computerWins-1;
        }
        else if(computerChoice == 2)
        {
            lightup(playerWins);
            playerWins++;
            scores[0].textContent=playerWins;
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
    if(computerWins<rounds/2 - 1)
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
    if(computerWins<rounds/2 - 1)
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
