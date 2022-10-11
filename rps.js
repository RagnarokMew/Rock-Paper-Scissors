const WIN = true;
const LOST = false;
const DRAW = null;

const choices = ['Rock', 'Paper', 'Scissors'];
const endingWin  = ['YOU', 'HAVE', 'WON'];
const endingLoss = ['YOU', 'HAVE', 'LOST'];

let rounds = 5;
let playerWins = 0;
let computerWins = rounds - 1;

let candles = document.getElementsByClassName("scorebox");
candles = Array.from(candles);

let phaseStatus = document.getElementsByClassName("status")[0];
let currPhase = "Attack Phase";
let messagePhase = document.getElementById("msg");

let scores = document.getElementsByClassName("counter");

let buttons = document.getElementsByClassName("btnhdl")[0].children;
buttons= Array.from(buttons);
let startbtn = document.getElementById("start");
let menubtn1 = document.getElementById("mainmenu1");
let menubtn2 = document.getElementById("mainmenu2");
let startbtn1 = document.getElementById("reset1");
let startbtn2 = document.getElementById("reset2");

let startScreen = document.getElementsByClassName("start")[2];
let defeatScreen = document.getElementsByClassName("start")[0];
let winScreen = document.getElementsByClassName("start")[1];

defeatScreen.style.display = "none";
winScreen.style.display = "none";

startbtn.addEventListener('click', ()=>
{
    reset();
    startScreen.style.display = "none";
});

startbtn1.addEventListener('click', ()=>
{
    reset();
    defeatScreen.style.display = "none";
});

startbtn2.addEventListener('click', ()=>
{
    reset();
    winScreen.style.display = "none";
});

menubtn1.addEventListener('click', ()=>
{
    startScreen.style.display = "flex";
    defeatScreen.style.display = "none";
});

menubtn2.addEventListener('click', ()=>
{
    startScreen.style.display = "flex";
    animate(startScreen);
    winScreen.style.display = "none";
});



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

function animate(parent)
{
    let elements = parent.querySelector(".cwrap");
    let element = elements.querySelectorAll(".fin");

    element = Array.from(element);
    element.forEach((child, index)=>
    {
        console.log(child);
        fade_in(child, index);
    });

}

function fade_in(target, index, opacity=0)
{
    if(opacity<1)
    {
        console.log("A");
        opacity+=0.01;
        target.style.opacity=opacity;
        setTimeout(function(){fade_in(target, index ,opacity)},10*(index*2));
    }
}

function phase()
{
    if(computerChoice(2)== true)
    {
        if(currPhase == "Attack Phase")currPhase="Defence Phase";
        else currPhase="Attack Phase";
        messagePhase.textContent=currPhase;
    }
}

function lock(ending)
{
    buttons.forEach((button,index)=>
    {
        button.disabled=true;
        button.textContent=ending[index];
    });

    if(ending[2]=="WON")
    {
        winScreen.style.display = "flex";
    }
    else defeatScreen.style.display = "flex";
}

function computerChoice(max)
{
    return Math.floor(Math.random()*max);
}

function lightUp(candle)
{
    const fire = document.createElement('img');
    fire.src='Images/Candle-top.png';
    fire.className = "fade-in";
    candles[candle].appendChild(fire);
}

function lightDown()
{
    candles.forEach((candle, index)=>
    {
        if(candle.children[1])candle.removeChild(candle.lastChild);
        //candle.removeChild(candle.lastChild);
    });

    phaseStatus.textContent ="";
}

function round(playerChoice, computerChoice)
{
    if(playerChoice == 1)
    {
        if(computerChoice == 1)
        {
            phaseStatus.textContent = 'Tie. Both fighters chose ROCK. The duel continues...';
            return;
        }
        else if(computerChoice == 2)
        {
            phaseStatus.textContent = 'Defeat. PAPER beats ROCK.';
            lightUp(computerWins);
            computerWins--;
            scores[1].textContent=rounds-computerWins-1;
            phase();
        } 
        else 
        {
            phaseStatus.textContent = 'Win. ROCK beats SCISSORS.';
            lightUp(playerWins);
            playerWins++;
            scores[0].textContent=playerWins;
            phase();
        }
    }
    else if(playerChoice == 2)
    {
        if(computerChoice == 1) 
        {
            phaseStatus.textContent = 'Win. PAPER beats ROCK.';
            lightUp(playerWins);
            playerWins++;
            scores[0].textContent=playerWins;
            phase();
        }
        else if(computerChoice == 2)
        {
            phaseStatus.textContent = 'Tie. Both fighters chose PAPER. The duel continues...';
            return;
        }
        else 
        {
            phaseStatus.textContent = 'Defeat. SCISSORS beats PAPER.';
            lightUp(computerWins);
            computerWins--;
            scores[1].textContent=rounds-computerWins-1;
            phase();
        }
    }
    else
    {
        if(computerChoice == 1)
        {
            phaseStatus.textContent = 'Defeat. ROCK beats SCISSORS.';
            lightUp(computerWins);
            computerWins--;
            scores[1].textContent=rounds-computerWins-1;
            phase();
        }
        else if(computerChoice == 2)
        {
            phaseStatus.textContent = 'Win. SCISSORS beats PAPER.'
            lightUp(playerWins);
            playerWins++;
            scores[0].textContent=playerWins;
            phase();
        }
        else 
        {
            phaseStatus.textContent = 'Tie. Both fighters chose SCISSORS. The duel continues...';
            return;
        }
    }
}

function reset()
{
    rounds = 5;
    playerWins = 0;
    computerWins = rounds -1;

    scores[0].textContent=0;
    scores[1].textContent=0;

    buttons.forEach((button,index)=>
    {
        button.disabled=false;
        button.textContent=choices[index];
    });

    lightDown();
}