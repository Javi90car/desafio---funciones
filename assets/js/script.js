let ele = document.getElementById("ele1")
ele.style.backgroundColor = "green"


pintar = function (color) {
    ele.style.backgroundColor = color;
  };
  
  ele.addEventListener("click", function () {
    pintar("yellow");
  });