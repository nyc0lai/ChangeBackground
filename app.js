
const colors = ['yellow', 'red', 'green', 'blue', 'black', 'orange', 'pink'];

document.getElementById('btn').addEventListener('click', changeColor)

function changeColor() {
    let color = colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor = color;

}