
let toprgb=document.getElementById("top");
setInterval(
    function () {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      toprgb.style.backgroundColor = "#"+randomColor;
    },1000);