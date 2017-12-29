var autogen = true;
var autoprest = 0;
var prestTime = 0;
var autotrans = 0;
var prestPerSec = 0;
var dprest = false;
var Tab = document.getElementById('generatorsTab');
Tab.insertAdjacentHTML('beforeend', '<form action="/action_page.php"> Auto-Generator: <input type="checkbox" id="genautoselect"><br>Auto-Prestige: <input type="text" id="prestautoamnt" defaultValue="0">Dynamic-Prestige: <input type="checkbox" id="dynamicprestselect"><br>Auto-Transfer: <input type="text" id="transautoamnt" defaultValue="0"></form><Button onclick="UpdateAA()">Start</Button><br><span>Auto Attractor V0.5<br>by IkerStream</span>')

function UpdateAA() {
    setInterval(Loop, 50);
    autogen = document.getElementById("genautoselect").checked;
    dprest = document.getElementById("dynamicprestselect").checked;
    if (!isNaN(document.getElementById("prestautoamnt").value)) autoprest = parseFloat(document.getElementById("prestautoamnt").value);
    if (!isNaN(document.getElementById("transautoamnt").value)) autotrans = parseInt(document.getElementById("transautoamnt").value);
}

function AutoPrestige() {
    if (getPrestigePower().gte(player.prestigePower.times(autoprest))){ 
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
if(getPrestigePower().gt(player.prestigePower))
{
    x = getPrestigePower().divide(prestTime);
    if(x<prestPerSec)
    {
        reset(1);
        prestTime = 0;
    }
}
}

function AutoGenerator() {
    for (i = 10; i > 0; i--) buyGenerator(i, 100);
}

function AutoTransfer() {
    if (getPrestigePoints().gte(autotrans)) reset(2);
}

function Loop() {
    if (autogen) AutoGenerator();
    if (dprest = true)DynamicAutoPrestige();
    else if (autoprest > 1) AutoPrestige();
    if (autotrans >= 1) AutoTransfer();
    document.getElementById("pt1").onclick = function() {
    prestTime = 0;
    }
    prestTime+=0.05;
}
