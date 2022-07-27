const WIN = true;
const LOST = false;
const DRAW = null;

function computerChoice(max)
{
    return Math.floor(Math.random()*max);
}

function round(playerChoice, computerChoice)
{
    if(playerChoice == 1)
    {
        if(computerChoice == 1) return DRAW;
        else if(computerChoice == 2) return LOST;
        return WIN;
    }
    else if(playerChoice == 2)
    {
        if(computerChoice == 1) return WIN;
        else if(computerChoice == 2) return DRAW;
        return LOST;
    }
    else
    {
        if(computerChoice == 1) return LOST;
        else if(computerChoice == 2) return WIN;
        return DRAW;
    }
}

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

let play = game();
if(play === null)alert("DRAW");
else if(play)alert("WIN");
else alert("LOST");
