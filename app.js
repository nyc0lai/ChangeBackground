
const colors = ['yellow', 'red', 'green', 'blue', 'black', 'orange', 'pink'];

let btn = document.getElementById('click');

btn.addEventListener('click', changeColor)

function changeColor() {
    let color = colors[getRndInteger(0, colors.length)];
    document.body.style.backgroundColor = color;

}

function getRndInteger(max, min) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }