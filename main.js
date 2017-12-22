var autogen = true;
var autoprest = 2;
function StartAutoAttractor(){
var autoprestige = setInterval(function(){
if(getPrestigePower().gte(player.prestigePower.times(autoprest))) reset(1)
},50)
var autogenerator = setInterval(maxAll,50)
}
setInterval(function(){
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
if(getPrestigePower().gte(player.prestigePower.times(autoprest))) reset(1)
},50)
)
},50)
