var AutoVersion = "Auto Attractor V0.9.14";
var autogen = true;
var autosuper = true;
var autoTransUp = true;
var autoprest = new Decimal(0);
var prestTime = 0;
var prestCheck = false;
var autotrans = new Decimal(0);
var prestPerMs = new Decimal(0);
var bestPrestPerMs = 0;
var TPPerMs = new Decimal(0);
var bestTPPerMs = new Decimal(0);
var dprest = false;
var dtrans = false;
var maxPP = new Decimal(0);
var TPcount = new Decimal(0);
var transBuffer = 2.5;
var prestBuffer = 2.5;
var transferPriority = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var transferIndex = 0;
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
        bestPrestPerMs = new Decimal(0);
        maxPP = new Decimal(0);
        prestTime = new Decimal(0);
	  	    prestCheck = false;
    });
    document.getElementById("prestige2").addEventListener("click", function() {
        bestTPPerMs = new Decimal(0);
        TPcount = new Decimal(0);
        bestPrestPerMs = new Decimal(0);
        maxPP = new Decimal(0);
        prestTime = new Decimal(0);
	    prestCheck = false;
    });
    document.getElementById("prestige3").addEventListener("click", function() {
        bestTPPerMs = new Decimal(0);
        TPcount = new Decimal(0);
        bestPrestPerMs = new Decimal(0);
        maxPP = new Decimal(0);
        prestTime = 0;
	    prestCheck = false;
    });
}, 100)

function UpdateAA() {
    setInterval(Loop, 50);
    autogen = document.getElementById("genautoselect").checked;
    autosuper = document.getElementById("superautoselect").checked;
    autoTransUp = document.getElementById("transferupgradeautoselect").checked;
    dprest = document.getElementById("dynamicprestselect").checked;
    dtrans = document.getElementById("dynamictransselect").checked;
    prestBuffer = parseFloat(document.getElementById("prestbufferamnt").value);
    transBuffer = parseFloat(document.getElementById("transbufferamnt").value);
    for(var i=0;i<14;i++)for(var j=1;j<15;j++)if(document.getElementById("t"+j).value == i+1)transferPriority[i] = j;
    if (dprest && getPrestigePower().gt(player.prestigePower) && player.stars.gte(1e40)) {
        reset(1);
        prestTime = 0;
        bestPrestPerMs = new Decimal(0);
        maxPP = new Decimal(0);
	    prestCheck = false;
    }
    if (!isNaN(document.getElementById("prestautoamnt").value)) autoprest = new Decimal(document.getElementById("prestautoamnt").value);
    if (!isNaN(document.getElementById("transautoamnt").value)) autotrans = new Decimal(document.getElementById("transautoamnt").value);
}

function AutoPrestige() {
    if (getPrestigePower().gte(player.prestigePower.times(autoprest)) && player.stars.gte(1e40)) {
        reset(1);
        prestTime = 0;
        bestPrestPerMs = new Decimal(0);
        maxPP = new Decimal(0);
	    prestCheck = false;
    } else {
        num = new Decimal(autotrans.pow(3));
        if(player.transferUpgrades.length>0)
        {
        if (player.transferUpgrades.includes(13) && getPrestigePower().gt(num * 500)) {
            reset(1);
            prestTime = 0;
            bestPrestPerMs = new Decimal(0);
            maxPP = new Decimal(0);
		    prestCheck = false;
            return;
        } 
        } 
        if (getPrestigePower().gt(num * 1000)) {
            reset(1);
            prestTime = 0;
            bestPrestPerMs = new Decimal(0);
            maxPP = new Decimal(0);
		    prestCheck = false;
            return;
        }
    }
}

function DynamicAutoPrestige() {
    if (getPrestigePower().gt(player.prestigePower) && getPrestigePower().gt(1)) {
        if ((bestPrestPerMs.times(1-(prestBuffer/100))).gt(prestPerMs)) {
		if(prestCheck)
		{
		   if(getPrestigePower().gte(maxPP))
		{
            	reset(1);
            	prestTime = 0;
            	bestPrestPerMs = new Decimal(0);
            	maxPP = new Decimal(0);
		        prestCheck = false;
		}
		}else prestCheck = true;
        } else {
            if (prestPerMs > bestPrestPerMs) bestPrestPerMs = prestPerMs;
        }
	     if (getPrestigePower().gt(maxPP)) maxPP = getPrestigePower();
    		prestPerMs = new Decimal(maxPP.div(prestTime));
    }
    num = new Decimal(autotrans.pow(3));
    if(player.transferUpgrades.length>0)
        {
    if (player.transferUpgrades.includes(13) && getPrestigePower().gt(num * 500)) {
        reset(1);
        prestTime = 0;
        bestPrestPerMs = new Decimal(0);
        maxPP = new Decimal(0);
	prestCheck = false;
        return;
    } 
        }
            if (getPrestigePower().gt(num * 1000)) {
        reset(1);
        prestTime = 0;
        bestPrestPerMs = new Decimal(0);
        maxPP = new Decimal(0);
	prestCheck = false;
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
        bestTPPerMs = new Decimal(0);
        TPcount = new Decimal(0);
        prestTime = 0;
        bestPrestPerMs = new Decimal(0);
        maxPP = new Decimal(0);
	prestCheck = false;
    }
}

function DynamicAutoTransfer() {
    if (getTransferPoints().gt(TPcount)) {
        TPPerMs = getTransferPoints().divide(player.transferPlaytime*1000);
        if (TPPerMs.lt(bestTPPerMs.times(1 - (transBuffer / 100)))) {
           	 reset(2);
            	bestTPPerMs = new Decimal(0);
            	TPcount = 0;
            	bestPrestPerMs = new Decimal(0);
            	maxPP = new Decimal(0);
		prestCheck = false;
        } else {
            TPcount = getTransferPoints();
            if (TPPerMs.gt(bestTPPerMs)) bestTPPerMs = TPPerMs;
        }
    }
    
}

function AutoTransferUpgrades() {
    while(player.transferUpgrades.includes(transferPriority[transferIndex]))transferIndex++;
    var num = Math.pow(costs.tupgs[transferPriority[transferIndex]-1]-player.transferPoints, 3)
    if(player.transferUpgrades.includes(13) && getPrestigePower().gt(num * 500))
    {
        reset(1);
        prestTime = 0;
        bestPrestPerMs = new Decimal(0);
        maxPP = new Decimal(0);
	    prestCheck = false;
    }else if (getPrestigePower().gt(num * 1000)) {
        reset(1);
        prestTime = 0;
        bestPrestPerMs = new Decimal(0);
        maxPP = new Decimal(0);
	    prestCheck = false;
    }
    if(getTransferPoints().gte(costs.tupgs[transferPriority[transferIndex]-1]-player.transferPoints))
    {
            reset(2);
            bestTPPerMs = new Decimal(0);
            TPcount = new Decimal(0);
            prestTime = 0;
            bestPrestPerMs = new Decimal(0);
            maxPP = new Decimal(0);
	    prestCheck = false;
    }
    if(player.transferPoints.gte(costs.tupgs[transferPriority[transferIndex]-1])) {
        buyTransferUpgrade(transferPriority[transferIndex]);
        transferIndex++;
    }
}
function AutoSupernova() {
    if (player.stars.gte(Number.MAX_VALUE)) {
        reset(3);
        bestTPPerMs = new Decimal(0);
        TPcount = new Decimal(0);
        bestPrestPerMs = new Decimal(0);
        maxPP = new Decimal(0);
	    prestCheck = false;
    }
}

function Loop() {
    if(autosuper) AutoSupernova();
    if(autoTransUp && transferIndex<14) AutoTransferUpgrades();
    if (dprest) DynamicAutoPrestige();
    else if (autoprest.gt(1)) AutoPrestige();
    if (dtrans) DynamicAutoTransfer();
    else if (autotrans.gte(1)) AutoTransfer();
    if (autogen && !prestCheck) AutoGenerator();
    prestTime += 50;
    x = new Decimal(prestPerMs.times(1000))
    document.getElementById("PP/sec").innerHTML = format(x) + "PP/s";
    x = new Decimal(TPPerMs.times(60000))
    document.getElementById("TP/sec").innerHTML = format(x, 3) + "TP/m";
}
