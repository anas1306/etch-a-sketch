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
        box.style.border = 'solid 1px #898989';
        box.style.backgroundColor = "#C0C0C0";
        box.style.height = `${heightWidth}px`;
        box.style.width = `${heightWidth}px`;
        box.style.cursor = "pointer";
        grid.appendChild(box);
        boxNumber--;
    }
}

function makesGridWork() {
    changeSides(slider.value);
    sideValue.textContent = `Set grid sides: ${slider.value}px`;
    colorChangable = document.querySelectorAll(".interactable")
    colorChangable.forEach(button => {
        button.addEventListener("mouseover", () => {
            document.body.onmousedown = function(){
                mouseDown = true;
            } 
            document.body.onmouseup = function(){
                mouseDown = false;
            }
            if (rgbMode.style.backgroundColor == "rgb(18, 18, 18)" && mouseDown === true) {
                button.style.backgroundColor = getNewColor();
            } else if (mouseDown === true) {
                button.style.backgroundColor = customColor.value
            }
        })
    })
    colorChangable.forEach(button => {
        button.addEventListener("mousedown", () => {
            if (rgbMode.style.backgroundColor == "rgb(18, 18, 18)") {
                button.style.backgroundColor = getNewColor();
            } else {
                button.style.backgroundColor = customColor.value
            }
        })
    })
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
const reset = document.querySelector("#resetGrid")
const rgbMode = document.querySelector("#changeColor")
const customColor = document.querySelector("#color")
let isDrawable = false;

slider.addEventListener("input", makesGridWork)

reset.addEventListener("click", makesGridWork)

rgbMode.addEventListener("click", () => {
    if (rgbMode.style.backgroundColor == "rgb(18, 18, 18)") {
        rgbMode.style.backgroundColor = "#332940"
        rgbMode.textContent = "RGB mode?"
    } else {
        rgbMode.style.backgroundColor = "#121212"
        rgbMode.textContent = "RGB mode."
    }
})

