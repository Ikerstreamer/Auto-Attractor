var autogen = true;
var autoprest = 2;
var Tab= document.getElementById('generatorsTab');
Tab.insertAdjacentHTML('beforeend', '<form action="/action_page.php"> Auto-Generator: <input type="checkbox" id="genautoselect"><br>Auto-Prestige: <input type="text" id="prestautoamnt" defaultValue="0"></form><Button onclick="UpdateAA()">Start</Button><br><span>Auto Attarctor V0.3<br>by IkerStream</span>')

function UpdateAA(){
        setInterval(Loop,50);
        autogen = document.getElementById("genautoselect").checked;
    if(!document.getElementById("prestautoamnt").value.isNaN)autoprest = parseFloat(document.getElementById("prestautoamnt").value);
}

function Autoprestige(){
        if (getPrestigePower().gte(player.prestigePower.times(autoprest))) reset(1);
}

function AutoGenerator(){
for(i=10;i>0;i--) buyGenerator(i,100);
}

function Loop() {
    if (autogen) AutoGenerator();
    if (autoprest > 1) AutoPrestige();
}
