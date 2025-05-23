function createGrid() {

}

const grid = document.querySelector(".grid")
const setGrid = document.querySelector("#setGrid")

setGrid.addEventListener("click", () => {
    let length = parseInt(prompt("What is the length of each side?"))
    console.log(length)
})
// okay so basically, first I'm gonna get the grid div. And then I'm gonna take the user's inputted value for the grid's size and then hand that to the create grid function. In the create grid function, I'm gonna make it so that the grid is exactly that many divs, as well as making them wrap so that they can only fit a certain amount of them.

