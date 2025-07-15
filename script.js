var sidenav = document.getElementById("sidenav")
var opennavbar = document.getElementById("opennavbar")
var closenavbar = document.getElementById("closenavbar")

opennavbar.addEventListener("click",function()
{
    sidenav.style.right = 0;

})
closenavbar.addEventListener("click",function()
{
    sidenav.style.right = "-85%";
})