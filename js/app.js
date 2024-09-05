/*
Minimum requirements
Display an empty tic-tac-toe board when the page is initially displayed.
A player can click on the nine cells to make a move.
Every click will alternate between marking an X and O.
Display whose turn it is (X or O).
The cell cannot be played again once occupied with an X or O.
Provide win logic and display a winning message.
Provide logic for a cat’s game (tie), also displaying a message.
Provide a Reset Game button that will clear the contents of the board.
*/

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

/*-------------------------------- Constants --------------------------------*/

let board, turn, winner, tie;

 
/*---------------------------- Variables (state) ----------------------------*/
board = ["","","","","","","","",""]
// console.log(board.length)

turn = "X"

// 💡 A false value in winner means that there is no winner yet. A value of true in winner will mean that a player has won.
// Once winner is set to true, we can determine which player won by whose turn it was when the winning move was played.
winner = false


// 💡 A true value in tie will mean that the board array contains no more empty strings ('') and will be used to render a tie message if winner is still false by the time all squares are played.
tie = false

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
// console.log(squareEls)

const messageEl =  document.querySelector('#message')
// console.log(messageEl)

/*-------------------------------- Functions --------------------------------*/
function init()  {
//  console.log("init used")
    render() 
}

function render(){

}

function updateBoard(){
    board.forEach(() => {
        board.shift()
        board.push("X")
        // board.splice(sq,1,"X")
        console.log("loop!")
    })
}

updateBoard()
console.log(board)
// init()

/*----------------------------- Event Listeners -----------------------------*/

