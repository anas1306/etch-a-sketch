function createGrid(sideLength) {

    j = grid.children.length;
    while (j > 0) {
        grid.removeChild(grid.lastElementChild);
        j--;
    }

    i = sideLength;
    heightWidth = (960/sideLength) - 4;
    boxNumber = i * i;
    while (boxNumber > 0) {
        box = document.createElement('div');
        box.classList.add("interactable");
        box.style.border = 'solid 2px black';
        box.style.backgroundColor = "white";
        box.style.height = `${heightWidth}px`;
        box.style.width = `${heightWidth}px`;
        grid.appendChild(box);
        boxNumber--;
    }

}

const grid = document.querySelector(".grid")
const setGrid = document.querySelector("#setGrid")

setGrid.addEventListener("click", () => {
    let length = parseInt(prompt("What is the length of each side?"))
    if (length > 100) {
        alert("You can't have that many squares!")
    } else {
        createGrid(length)
    }
})
// okay so basically, first I'm gonna get the grid div. And then I'm gonna take the user's inputted value for the grid's size and then hand that to the create grid function. In the create grid function, I'm gonna make it so that the grid is exactly that many divs, as well as making them wrap so that they can only fit a certain amount of them.

