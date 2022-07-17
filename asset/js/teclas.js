let color = "";

const pintar = (element) => {
    document.getElementById(element.target.id).style.backgroundColor = color;
}
document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        color = "black";
    } else if (event.key === "s") {
        color = "purple";
    } else if (event.key === "d") {
        color = "blue";
    }
});

document.addEventListener("click", pintar);
