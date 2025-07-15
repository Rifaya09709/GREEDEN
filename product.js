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

//product search functionality

var productcontainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = this.value.toUpperCase();

    for(var count = 0; count < productlist.length; count = count+1){

     var h1Element = productlist[count].querySelector("h1");

     var productname = h1Element.textContent.toUpperCase();

     if(productname.indexOf(enteredValue)<0)
     {
        productlist[count].style.display="none";
     }
     else{
        productlist[count].style.display="block";
     }

        
}

})