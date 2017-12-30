var autogen = true;
var autoprest = 0;
var prestTime = 0;
var autotrans = 0;
var prestPerMs = 0;
var TPPerMs = 0;
var dprest = false;
var dtrans = false;
var maxPP = 0;
var TPcount = 0;
var Tab = document.getElementById('generatorsTab');
Tab.insertAdjacentHTML('beforeend', '<form> Auto-Generator: <input type="checkbox" id="genautoselect" checked><br>Dynamic-Prestige: <input type="checkbox" id="dynamicprestselect" checked><br>Auto-Prestige: <b id="PP/sec"></b><input type="text" id="prestautoamnt" defaultValue="0"><br>Dynamic-Transfer: <input type="checkbox" id="dynamictransselect" checked><br>Auto-Transfer: <b id="TP/sec"></b><input type="text" id="transautoamnt" defaultValue="0"></form><Button onclick="UpdateAA()">Start</Button><br><span>Auto Attractor V0.7.1<br>by IkerStream</span>')

setInterval(function(){
if(document.getElementById("dynamicprestselect").checked) {
    document.getElementById("prestautoamnt").style.display = "none";
    document.getElementById("PP/sec").style.display = "inline-block";

}
    else {
        document.getElementById("prestautoamnt").style.display = "inline-block";
        document.getElementById("PP/sec").style.display = "none";
    }
    if(document.getElementById("dynamictransselect").checked) {
        document.getElementById("transautoamnt").style.display = "none";
    document.getElementById("TP/sec").style.display = "inline-block";       
    }
    else {
        document.getElementById("transautoamnt").style.display = "inline-block";
        document.getElementById("TP/sec").style.display = "none";
    }
},100)

function UpdateAA() {
    setInterval(Loop, 50);
    autogen = document.getElementById("genautoselect").checked;
    dprest = document.getElementById("dynamicprestselect").checked;
    dtrans = document.getElementById("dynamictransselect").checked;
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

function DynamicAutoTransfer() {
if(getPrestigePoints().gt(TPcount))
{
    x=getPrestigePoints().divide(player.transferPlaytime);
    if(x<TPPerMs)
    {
        reset(2);
        TPPerMs = 0;
        TPcount = 0;
    }else 
    {
        TPcount = getPrestigePoints();
        TPPerMs = x;
    }
}
}

function Loop() {
    if (dprest) DynamicAutoPrestige();
    else if (autoprest > 1) AutoPrestige();
    if (dtrans) DynamicAutoTransfer();
    else if (autotrans >= 1) AutoTransfer();
    if (autogen) AutoGenerator();
    prestTime+=50;
    x = new Decimal(prestPerMs*1000)
    document.getElementById("PP/sec").innerHTML = format(x) + "PP/s";
    x = new Decimal(TPPerMs*1000)
    document.getElementById("TP/sec").innerHTML = format(x,3) + "TP/s";
}
