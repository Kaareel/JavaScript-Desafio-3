var ele = document.getElementById("ele1", );

let pintar = function (click, color = "yellow") {
  ele.style.backgroundColor = color;
};

ele.addEventListener("click", pintar);
pintar("click", "green")