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
const winningCombos =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
]


 
/*---------------------------- Variables (state) ----------------------------*/
board = ["X","1","2",
        "3","4","5",
        "6","7","8"]

/*
    VISUALIZE THE BOARD + INDEXES
        ["0","1","2",
        "3","4","5",
        "6","7","8"]
*/

// console.log(board.length)

turn = "X"

// 💡 A false value in winner means that there is no winner yet. A value of true in winner will mean that a player has won.
// Once winner is set to true, we can determine which player won by whose turn it was when the winning move was played.
winner = true


// 💡 A true value in tie will mean that the board array contains no more empty strings ('') and will be used to render a tie message if winner is still false by the time all squares are played.
tie = false

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
// console.dir(squareEls)

const messageEl =  document.querySelector('#message')
// console.log(messageEl)

/*-------------------------------- Functions --------------------------------*/

function handleClick(event){
    console.log(event.target.id)
    const squareIndex = event.target.id
    if (board[squareIndex] === "X" || "O"){
        return
    } if (winner === true){
        return
    }
}

function updateBoard(){
    board.forEach((turn,index) => {
        //Turn is the value of board at index "index"
        console.log(squareEls[index])
        squareEls[index].innerText = turn
    })
}


function updateMessage(){
    if (!winner && !tie){
        // render(turn) 
        // placeholder
        console.log("not a winnder or tie")
    } else if (!winner && tie){
        // render(tieMessage)
        // placeholder
        console.log("It's a Tie!")
    } else {
        // render(winningmessage)
        //placeholder
        console.log("YOUR WINNER")
    }
}

function render(){
    updateBoard()
    updateMessage()
}

function init()  {
//  console.log("init used")
    render()
}

init()


// updateMessage()
/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(square => {
    square.addEventListener("click", (e) => {handleClick(e)})    
});