let board = ["","","","","","","","",""];
let currentPlayer = "X";
let gameActive = true;

const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

const winningCombos = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

cells.forEach((cell,index)=>{
    cell.addEventListener("click", ()=>makeMove(index));
});

function makeMove(index){

if(board[index] !== "" || !gameActive) return;

board[index] = currentPlayer;
cells[index].textContent = currentPlayer;

if(checkWinner()){
    gameActive = false;
    setTimeout(()=>{
        alert("Player " + currentPlayer + " Wins!");
    },100);
    return;
}

if(!board.includes("")){
    gameActive = false;
    setTimeout(()=>{
        alert("Game Draw!");
    },100);
    return;
}

currentPlayer = currentPlayer === "X" ? "O" : "X";
statusText.textContent = "Player " + currentPlayer + " Turn";
}

function checkWinner(){

for(let combo of winningCombos){

let [a,b,c] = combo;

if(board[a] && board[a] === board[b] && board[a] === board[c]){
return true;
}

}

return false;
}

function restartGame(){

board = ["","","","","","","","",""];
currentPlayer = "X";
gameActive = true;

cells.forEach(cell=>cell.textContent="");

statusText.textContent = "Player X Turn";
}