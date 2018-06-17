setInterval(time, 1000);
function time()
{
   var d = new Date();
    document.getElementById("outerDiv").innerHTML = d.toLocaleTimeString();
}