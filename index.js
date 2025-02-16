var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click",function()
{
    menuicon.style.top="-50%"
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
let img = document.querySelector(".main");
      let btn_next = document.querySelector(".btn btn-left");
      let btn_prev = document.querySelector(".btn btn-right");
      btn_next.addEventListener("click", function () {
        console.log("nextClicked");
        img.removeAttribute("src");
        img.setAttribute(
          "src",
          "./images/c1.jpg"
        );
      });
      btn_prev.addEventListener("click", function () {
        console.log("nextClicked");
        img.removeAttribute("src");
        img.setAttribute(
          "src",
          "—Pngtree—lord ganesh g murti hindu_18726446.png"
        );
      });