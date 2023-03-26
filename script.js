
const container = document.getElementById("container");
let sizeButton = document.getElementById("gridsize");
let square;
let resetButton = document.getElementById("resetgrid");

function createGrid(){
  removeGrid();
  number = prompt("enter the size")
  const grid = number * number;
  for (let i = 0; i <= grid - 1; i++){
    square = document.createElement("div");
    square.setAttribute("id", "box")
    container.appendChild(square);   
    square.addEventListener("mouseover", changeColor);
    newFlexBasis = 640 / number + "px";
    square.style.flexBasis = newFlexBasis;
  }    
}

function changeColor(e){
    const randomR = Math.floor(Math.random() * 256) 
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;

}

function removeGrid(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function resetGrid(){
  let squares = container.querySelectorAll("#box");
  for (square of squares){
    square.style.backgroundColor = "white"
  }
}

sizeButton.addEventListener("click", createGrid);
resetButton.addEventListener("click", resetGrid);

