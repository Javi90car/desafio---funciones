let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");
let div4 = document.querySelector("#div4");

div1.style.width = "200px";
div1.style.height = "200px";
div1.style.backgroundColor = "green";

div2.style.width = "200px";
div2.style.height = "200px";
div2.style.backgroundColor = "tomato";

div3.style.width = "200px";
div3.style.height = "200px";
div3.style.backgroundColor = "gray";

div4.style.width = "200px";
div4.style.height = "200px";
div4.style.backgroundColor = "yellow";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color1 = "pink"
    return
  }
  if (event.key === "s") {
    color2 = "peru"
    return
  }
  if (event.key === "d") {
    color3 = "white"
    return
  }
});


div1.addEventListener("click",()=>{
  div1.style.backgroundColor = color1
  div1.style.backgroundColor = color2
  div1.style.backgroundColor = color3
})

div2.addEventListener("click",()=>{
  div2.style.backgroundColor = color1
  div2.style.backgroundColor = color2
  div2.style.backgroundColor = color3
})

div3.addEventListener("click",()=>{
  div3.style.backgroundColor = color1
  div3.style.backgroundColor = color2
  div3.style.backgroundColor = color3
})

div4.addEventListener("click",()=>{
  div4.style.backgroundColor = color1
  div4.style.backgroundColor = color2
  div4.style.backgroundColor = color3
})