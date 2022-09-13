const WIN = true;
const LOST = false;
const DRAW = null;

let rounds;
if(!rounds)rounds=5;
let buttons = document.getElementsByClassName("btnhdl")[0].children;
buttons= Array.from(buttons);
let startbutt = document.getElementById('start');
let endbutt;
let candles = document.getElementsByClassName("scorebox");
let phaseStatus = document.getElementsByClassName("status");
let currPhase = "Attack Phase";
let messagePhase = document.getElementById("msg");
let choices = ['Rock', 'Paper', 'Scissors'];
let endingWin  = ['YOU', 'HAVE', 'WON'];
let endingLoss = ['YOU', 'HAVE', 'LOST'];
let playerWins = 0;
let computerWins = rounds - 1;

phaseStatus[0].textContent = 'The duel begins...';

let scores = document.getElementsByClassName("counter");

function phase()
{
    if(computerChoice(2)== true)
    {
        if(currPhase == "Attack Phase")currPhase="Defence Phase";
        else currPhase="Attack Phase";
        messagePhase.textContent=currPhase;
    }
}

buttons.forEach((button, index)=>
{
    button.textContent=index
})

function computerChoice(max)
{
    return Math.floor(Math.random()*max);
}

function lightup(candle)
{
    const fire = document.createElement('img');
    fire.src='Images/Candle-top.png';
    fire.className = "fade-in";
    candles[candle].appendChild(fire);
}

function lock(ending)
{
    buttons.forEach((button,index)=>
    {
        button.disabled=true;
        button.textContent=ending[index];
    });
}

function round(playerChoice, computerChoice)
{
    if(playerChoice == 1)
    {
        if(computerChoice == 1)
        {
            phaseStatus[0].textContent = 'Tie. Both fighters chose ROCK. The duel continues...';
            return;
        }
        else if(computerChoice == 2)
        {
            phaseStatus[0].textContent = 'Defeat. PAPER beats ROCK. The duel continues';
            lightup(computerWins);
            computerWins--;
            scores[1].textContent=rounds-computerWins-1;
            phase();
        } 
        else 
        {
            lightup(playerWins);
            playerWins++;
            scores[0].textContent=playerWins;
            phase();
        }
    }
    else if(playerChoice == 2)
    {
        if(computerChoice == 1) 
        {
            lightup(playerWins);
            playerWins++;
            scores[0].textContent=playerWins;
            phase();
        }
        else if(computerChoice == 2)
        {
            phaseStatus[0].textContent = 'Tie. Both fighters chose PAPER. The duel continues...';
            return;
        }
        else 
        {
            lightup(computerWins);
            computerWins--;
            scores[1].textContent=rounds-computerWins-1;
            phase();
        }
    }
    else
    {
        if(computerChoice == 1)
        {
            lightup(computerWins);
            computerWins--;
            scores[1].textContent=rounds-computerWins-1;
            phase();
        }
        else if(computerChoice == 2)
        {
            lightup(playerWins);
            playerWins++;
            scores[0].textContent=playerWins;
            phase();
        }
        else 
        {
            phaseStatus[0].textContent = 'Tie. Both fighters chose SCISSORS. The duel continues...';
            return;
        }
    }
}

buttons[0].addEventListener('click',()=>
{
    round(1,computerChoice(3)); 
    if(playerWins>rounds/2)
    {
        lock(endingWin);
    }
    if(computerWins<rounds/2 - 1 )
    {
        lock(endingLoss);
    }
});

buttons[1].addEventListener('click',()=>
{
    round(2,computerChoice(3)); 
    if(playerWins>rounds/2)
    {
        lock(endingWin);
    }
    if(computerWins<rounds/2 - 1)
    {
        lock(endingLoss);
    }
});

buttons[2].addEventListener('click',()=>
{
    round(3,computerChoice(3)); 
    if(playerWins>rounds/2)
    {
        lock(endingWin);
    }
    if(computerWins<rounds/2 - 1)
    {
        lock(endingLoss);
    }
});
