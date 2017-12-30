var autogen = true;
var autoprest = 0;
var prestTime = 0;
var autotrans = 0;
var prestPerMs = 0;
var dprest = false;
var maxPP = 0;
var Tab = document.getElementById('generatorsTab');
Tab.insertAdjacentHTML('beforeend', '<form> Auto-Generator: <input type="checkbox" id="genautoselect"><br>Auto-Prestige: <input type="text" id="prestautoamnt" defaultValue="0"><br>Dynamic-Prestige: <input type="checkbox" id="dynamicprestselect" checked><b id="PP/sec"></b><br>Auto-Transfer: <input type="text" id="transautoamnt" defaultValue="0"></form><Button onclick="UpdateAA()">Start</Button><br><span>Auto Attractor V0.7.1<br>by IkerStream</span>')

function UpdateAA() {
    setInterval(Loop, 50);
    autogen = document.getElementById("genautoselect").checked;
    dprest = document.getElementById("dynamicprestselect").checked;
    if(dprest && getPrestigePower().gt(player.prestigePower) && player.points.gte(1e40))
    {
        reset(1);
        prestTime = 0;
        prestPerMs = 0;
        maxPP = 0;
    }
    if (!isNaN(document.getElementById("prestautoamnt").value)) autoprest = parseFloat(document.getElementById("prestautoamnt").value);
    if (!isNaN(document.getElementById("transautoamnt").value)) autotrans = parseInt(document.getElementById("transautoamnt").value);
}

function AutoPrestige() {
    if (getPrestigePower().gte(player.prestigePower.times(autoprest)) && player.points.gte(1e40)){ 
        reset(1);
        prestTime = 0;
    }
    else {
        num = Math.pow(autotrans, 3)
        if (player.prestigeUpgrades.includes(13) && getPrestigePower().gt(num * 500)){
            reset(1);
            prestTime = 0;
        }
        else if (getPrestigePower().gt(num * 1000)) {
            reset(1);
            prestTime = 0;   
        }
    }
}

function DynamicAutoPrestige()
{
    if(getPrestigePower().gt(maxPP)) maxPP = getPrestigePower();
if(getPrestigePower().gt(player.prestigePower) && prestTime%1000 == 0 && player.points.gte(1e40))
{
    x = maxPP/prestTime;
    if(x<prestPerMs)
    {
        reset(1);
        prestTime = 0;
        prestPerMs = 0;
        maxPP = 0;
    }else
    {
    prestPerMs = x;
    }
}
     num = Math.pow(autotrans, 3)
        if (player.prestigeUpgrades.includes(13) && getPrestigePower().gt(num * 500)){
            reset(1);
            prestTime = 0;
        }
        else if (getPrestigePower().gt(num * 1000)) {
            reset(1);
            prestTime = 0;   
        }
}

function AutoGenerator() {
    for (i = 10; i > 0; i--) buyGenerator(i, 100);
}

function AutoTransfer() {
    if (getPrestigePoints().gte(autotrans)) reset(2);
}

function Loop() {
    if (dprest)DynamicAutoPrestige();
    else if (autoprest > 1) AutoPrestige();
    if (autotrans >= 1) AutoTransfer();
    if (autogen) AutoGenerator();
    prestTime+=50;
    x = new Decimal(prestPerMs*1000)
    document.getElementById("PP/sec").innerHTML = format(x) + "PP/s";
}
