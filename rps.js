function computerChoice(max)
{
    return Math.floor(Math.random()*max);
}

function round(playerChoice, computerChoice)
{
    const ROUNDWON = true;
    const ROUNDLOST = false;
    const DRAW = null;

    if(playerChoice == 1)
    {
        if(computerChoice == 1) return DRAW;
        else if(computerChoice == 2) return ROUNDLOST;
        return ROUNDWON;
    }
    else if(playerChoice == 2)
    {
        if(computerChoice == 1) return ROUNDWON;
        else if(computerChoice == 2) return DRAW;
        return ROUNDLOST;
    }
    else
    {
        if(computerChoice == 1) return ROUNDLOST;
        else if(computerChoice == 2) return ROUNDWON;
        return DRAW;
    }
}