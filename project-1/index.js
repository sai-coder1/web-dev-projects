const overlay = document.getElementById("overlay");

function setColor(name) {
    overlay.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const color = `rgba(${red},${green},${blue},0.9)`;

    overlay.style.backgroundColor = color;
}
