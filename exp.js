var AutoVersion = "Auto Attractor V0.9.10";
var autogen = true;
var autosuper = true;
var autoTransUp = true;
var autoprest = 0;
var prestTime = 0;
var autotrans = 0;
var prestPerMs = 0;
var bestPrestPerMs = 0;
var TPPerMs = 0;
var bestTPPerMs = 0;
var dprest = false;
var dtrans = false;
var maxPP = 0;
var TPcount = 0;
var transBuffer = 2.5;
var prestBuffer = 2.5;
var transferPriority = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var Tab = document.getElementById('tabgen');
Tab.insertAdjacentHTML('beforeend', '<form> Auto-Generator: <input type="checkbox" id="genautoselect" checked><br>Dynamic-Prestige: <input type="checkbox" id="dynamicprestselect" checked>  Buffer: <select id="prestbufferamnt"><option value="0">Off</option><option value="2.5">2.5%</option><option value="5">5%</option><option value="7.5">7.5%</option><option value="10">10%</option></select><br>Auto-Prestige: <b id="PP/sec"></b><input type="text" id="prestautoamnt" defaultValue="0"><br>Dynamic-Transfer: <input type="checkbox" id="dynamictransselect" checked>  Buffer:<select id="transbufferamnt"><option value="0">Off</option><option value="2.5">2.5%</option><option value="5">5%</option><option value="7.5">7.5%</option><option value="10">10%</option></select><br>Auto-Transfer: <b id="TP/sec"></b><input type="text" id="transautoamnt" defaultValue="0"><br>Auto-Transfer-Upgrades<input type="checkbox" id="transferupgradeautoselect"><br><div id="transferupgrade"><b>Transfer Upgrade Priority</b><br><table><tr><td><select id="t1"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><select id="t2"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><select id="t3"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><select id="t4"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td></tr><tr><td><select id="t5"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><select id="t6"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><select id="t7"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><select id="t8"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td></tr><tr><td><select id="t9"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><select id="t10"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><select id="t11"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><select id="t12"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td></tr><tr><td></td><td><select id="t13"><option value="13">13</option><option value="14">14</option></select></td><td><select id="t14"><option value="13">13</option><option value="14">14</option></select></td><td></td></tr></table></div><br>Auto-Supernova: <input type="checkbox" id="superautoselect" checked></form><Button onclick="UpdateAA()">Start</Button><br><span><b id="verName"></b><br>by IkerStream</span>');
document.getElementById("verName").innerHTML = AutoVersion;

setInterval(function() {
    if (document.getElementById("dynamicprestselect").checked) {
        document.getElementById("prestautoamnt").style.display = "none";
        document.getElementById("PP/sec").style.display = "inline-block";

    } else {
        document.getElementById("prestautoamnt").style.display = "inline-block";
        document.getElementById("PP/sec").style.display = "none";
    }
    if (document.getElementById("dynamictransselect").checked) {
        document.getElementById("transautoamnt").style.display = "none";
        document.getElementById("TP/sec").style.display = "inline-block";
    } else {
        document.getElementById("transautoamnt").style.display = "inline-block";
        document.getElementById("TP/sec").style.display = "none";
    }
    if(document.getElementById("transferupgradeautoselect").checked) document.getElementById("transferupgrade").style.display = "inline-block"; 
    else document.getElementById("transferupgrade").style.display = "none"; 
    
    document.getElementById("prestige1").addEventListener("click", function() {
        bestPrestPerMs = 0;
        maxPP = 0;
        prestTime = 0;
    });
    document.getElementById("prestige2").addEventListener("click", function() {
        bestTPPerMs = 0;
        TPcount = 0;
        bestPrestPerMs = 0;
        maxPP = 0;
        prestTime = 0;
    });
    document.getElementById("prestige3").addEventListener("click", function() {
        bestTPPerMs = 0;
        TPcount = 0;
        bestPrestPerMs = 0;
        maxPP = 0;
        prestTime = 0;
    });
}, 100)

function UpdateAA() {
    setInterval(Loop, 50);
    autogen = document.getElementById("genautoselect").checked;
    autosuper = document.getElementById("superautoselect").checked;
    autoTransUp = document.getElementById("transferupgradeautoselect").checked;
    dprest = document.getElementById("dynamicprestselect").checked;
    dtrans = document.getElementById("dynamictransselect").checked;
    prestBuffer = document.getElementById("prestbufferamnt").value;
    transBuffer = document.getElementById("transbufferamnt").value;
    for(var i=0;i<14;i++)for(var j=1;j<15;j++)if(document.getElementById("t"+j).value == i+1)transferPriority[i] = j;
    if (dprest && getPrestigePower().gt(player.prestigePower) && player.stars.gte(1e40)) {
        reset(1);
        prestTime = 0;
        bestPrestPerMs = 0;
        maxPP = 0;
    }
    if (!isNaN(document.getElementById("prestautoamnt").value)) autoprest = parseFloat(document.getElementById("prestautoamnt").value);
    if (!isNaN(document.getElementById("transautoamnt").value)) autotrans = parseInt(document.getElementById("transautoamnt").value);
}

function AutoPrestige() {
    if (getPrestigePower().gte(player.prestigePower.times(autoprest)) && player.stars.gte(1e40)) {
        reset(1);
        prestTime = 0;
        prestTime = 0;
        bestPrestPerMs = 0;
        maxPP = 0;
    } else {
        num = Math.pow(autotrans, 3)
        if(player.transferUpgrades.length>0)
        {
        if (player.transferUpgrades.includes(13) && getPrestigePower().gt(num * 500)) {
            reset(1);
            prestTime = 0;
            prestTime = 0;
            bestPrestPerMs = 0;
            maxPP = 0;
            return;
        } 
        } 
        if (getPrestigePower().gt(num * 1000)) {
            reset(1);
            prestTime = 0;
            prestTime = 0;
            bestPrestPerMs = 0;
            maxPP = 0;
            return;
        }
    }
}

function DynamicAutoPrestige() {
    if (getPrestigePower().gt(maxPP)) maxPP = getPrestigePower();
    prestPerMs = maxPP / prestTime;
    if (getPrestigePower().gt(player.prestigePower) && prestTime % 1000 == 0 && player.stars.gte(1e40)) {
        if (prestPerMs < bestPrestPerMs - (bestPrestPerMs * (prestBuffer / 100))) {
            reset(1);
            prestTime = 0;
            bestPrestPerMs = 0;
            maxPP = 0;
        } else {
            if (prestPerMs > bestPrestPerMs) bestPrestPerMs = prestPerMs;
        }
    }
    num = Math.pow(autotrans, 3)
    if(player.transferUpgrades.length>0)
        {
    if (player.transferUpgrades.includes(13) && getPrestigePower().gt(num * 500)) {
        reset(1);
        prestTime = 0;
        bestPrestPerMs = 0;
        maxPP = 0;
        return;
    } 
        }
            if (getPrestigePower().gt(num * 1000)) {
        reset(1);
        prestTime = 0;
        bestPrestPerMs = 0;
        maxPP = 0;
        return;
    }
}

function AutoGenerator() {
   for (j=10;j>0;j--){
	buyGen(j,1e100);
   }
}

function AutoTransfer() {
    if (getTransferPoints().gte(autotrans)) {
        reset(2);
        bestTPPerMs = 0;
        TPcount = 0;
        prestTime = 0;
        bestPrestPerMs = 0;
        maxPP = 0;
    }
}

function DynamicAutoTransfer() {
    if (getTransferPoints().gt(TPcount)) {
        TPPerMs = getTransferPoints().divide(player.transferPlaytime);
        if (TPPerMs < bestTPPerMs - (bestTPPerMs * (transBuffer / 100))) {
            reset(2);
            bestTPPerMs = 0;
            TPcount = 0;
            prestTime = 0;
            bestPrestPerMs = 0;
            maxPP = 0;
        } else {
            TPcount = getTransferPoints();
            if (TPPerMs > bestTPPerMs) bestTPPerMs = TPPerMs;
        }
    }
    
}

function AutoTransferUpgrades() {
    var transferIndex = 0;
    while(player.transferUpgrades.includes(transferPriority[transferIndex]))tranferIndex++;
    var num = Math.pow(tupgCosts[transferPriority[transferIndex]], 3)
    if(player.transferUpgrades.includes(13) && getPrestigePower().gt(num * 500))
    {
        reset(1);
        prestTime = 0;
        bestPrestPerMs = 0;
        maxPP = 0;
    }else if (getPrestigePower().gt(num * 1000)) {
        reset(1);
        prestTime = 0;
        bestPrestPerMs = 0;
        maxPP = 0;
    }
    if(getTransferPoints().gte(tupgCosts[transferPriority[transferIndex]]))
    {
            reset(2);
            bestTPPerMs = 0;
            TPcount = 0;
            prestTime = 0;
            bestPrestPerMs = 0;
            maxPP = 0;
    }
    if(player.transferPoints>=tupgCosts[transferPriority[transferIndex]]) {
        buyTransferUpgrade(transferPriority[transferIndex]);
        transferIndex++;
    }
}
function AutoSupernova() {
    if (player.stars.gte(Number.MAX_VALUE)) {
        reset(3);
        bestTPPerMs = 0;
        TPcount = 0;
        bestPrestPerMs = 0;
        maxPP = 0;
        prestTime = 0;
    }
}

function Loop() {
    if(autosuper) AutoSupernova();
    if(autoTransUp) AutoTransferUpgrades();
    if (dprest) DynamicAutoPrestige();
    else if (autoprest > 1) AutoPrestige();
    if (dtrans) DynamicAutoTransfer();
    else if (autotrans >= 1) AutoTransfer();
    if (autogen) AutoGenerator();
    prestTime += 50;
    x = new Decimal(prestPerMs * 1000)
    document.getElementById("PP/sec").innerHTML = format(x) + "PP/s";
    x = new Decimal(TPPerMs * 60000)
    document.getElementById("TP/sec").innerHTML = format(x, 3) + "TP/m";
}
