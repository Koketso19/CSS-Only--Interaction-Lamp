function populateBoard(size) {

    let board = document.querySelector('.board')
    let square = board.querySelectorAll("div");
    square.forEach((div) => div.remove());
board.style.gridTampleColumn = 'repeat($(size) , 1fr )'
board.style.gridTampleRows = 'repeat($(size) , 1fr )'

for (let i = 0; i < 256; i++){
    let square = document.createElement("div");
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", square);
}
}

populateBoard(16);

function chanceSize(input) {
    if(input <2)
    populateBoard(input);
}