function changeSides(sideLength = 0) {

    j = grid.children.length;
    while (j > 0) {
        grid.removeChild(grid.lastElementChild);
        j--;
    }

    i = sideLength;
    heightWidth = (512/sideLength) - 2;
    boxNumber = i * i;
    while (boxNumber > 0) {
        box = document.createElement('div');
        box.classList.add("interactable");
        box.style.border = 'solid 1px black';
        box.style.backgroundColor = "#C0C0C0";
        box.style.height = `${heightWidth}px`;
        box.style.width = `${heightWidth}px`;
        box.style.cursor = "pointer";
        grid.appendChild(box);
        boxNumber--;
    }
}

function getNewColor() {
  let symbols = '0123456789ABCDEF';
  let color = '#'
  for (let i = 0; i < 6; i++) {
     color += symbols[Math.floor(Math.random() * 16)];
  }
  return color;
}

const sideValue = document.querySelector("#setSide");
const grid = document.querySelector(".grid");
const slider = document.querySelector(".slider");
let colorChangable = document.querySelectorAll(".interactable")

slider.addEventListener("input", () => {
    changeSides(slider.value);
    sideValue.textContent = `Set grid sides: ${slider.value}px`;
    colorChangable = document.querySelectorAll(".interactable")
    colorChangable.forEach(button => {
        button.addEventListener("mousedown", () => {
            button.style.backgroundColor = "#332940";
        })
    })
})

// okay so basically, first I'm gonna get the grid div. And then I'm gonna take the user's inputted value for the grid's size and then hand that to the create grid function. In the create grid function, I'm gonna make it so that the grid is exactly that many divs, as well as making them wrap so that they can only fit a certain amount of them.

