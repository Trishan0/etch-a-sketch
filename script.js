let color = 'black';
let click = true

function populateBoard(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");

        square.addEventListener('mouseover',colorSquare)
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    
  };
}
populateBoard(16);

function setSize() {
    let size = parseInt(document.getElementById('size').value, 10);
    let board = document.querySelector(".board");
    board.innerHTML = "";
    populateBoard(size);
  }

const sizeDisplay = document.querySelector("#value");
const input = document.querySelector("#size"); 
sizeDisplay.textContent = input.value;
input.addEventListener("input", (event) => {
  sizeDisplay.textContent = event.target.value;
});

function colorSquare() {
    if (click){
        if (color === 'random') {
            this.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        } else {
            this.style.backgroundColor = color;
        }
    }

}

function changeColor(choice){
    color = choice;
}

function reset(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) =>{
        div.style.backgroundColor = 'white'
    })

}

document.querySelector('body').addEventListener('click', () => {
    let msg = document.querySelector('.msg');

    click = !click;
    if (click) {
        msg.textContent = "Press left click to stop coloring";
    } else {
        msg.textContent = "Press left click to start coloring";
    }
});