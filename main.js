var autogen = true;
var autoprest = 2;
var d1 = document.getElementById('generatorsTab');
d1.insertAdjacentHTML('beforeend', '<form action="/action_page.php"> Auto-Generator: <input type="checkbox" id="genautoselect"><br>Auto-Prestige: <input type="text" id="prestautoamnt" defaultValue="0"></form>');
function StartAutoAttractor(){
var autoprestige = setInterval(function(){
if(getPrestigePower().gte(player.prestigePower.times(autoprest))) reset(1);
},50)
var autogenerator = setInterval(maxAll,50)
}
setInterval(function(){
  autogen = document.getElementById("genautoselect").checked;
  autoprest = document.getElementById("prestautoamnt").value;
if(autogen)
{
autogenerator = setInterval(maxAll,50)
}else
{
clearInterval(autogenerator)
}
if(autoprest<=0)
{
clearInterval(autoprestige)
}else(
autoprestige = setInterval(function(){
if(getPrestigePower().gte(player.prestigePower.times(autoprest))) reset(1);
},50)
)
},50)
