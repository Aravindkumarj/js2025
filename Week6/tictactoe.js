/*- 
Initialize (new game / reset)
- [ ] Set position values like A1, A2, A3, B1, B2, B3, C1, C2, C3 and initialize them with space assigned to it.
- [ ] Setup complete positions like [A1, A2, A3], [B1, B2, B3], [C1, C2, C3], [A1, B2, C3], [C1, B2, A3]etc

Play game
- [ ] Ask player1 for input. Start by assinging X for player 1
- [ ] Input must be one of these values A1, A2, A3, B1, B2, B3, C1, C2, C3
- [ ] If the position is already taken, the show a message saying "Spot is not avaiable"
- [ ] If the spot is available, print all the three rows with the spot highlighted with X. 
- [ ] Once these values are assigned, they cannot be changed until a reset button / new game button is hit.
- [ ] Save the spot to reference later 
- [ ] Player 2's turn. O is player 2 
Is game complete
- [ ] Check if the game is complete.
- [ ] Find all winning combinations where the spot is involved. Now check if the other two spots in every combination has the same value as the value the player picked
- [ ] If atleast one winning combination is filled, print the current player as the winner and print the all the spots on the screen.
- [ ] Based on what the user selected find all the combinations of that selected input to win the game and check if place one of these combinations are complete

- [ ] Player 2 symbol is O
- [ ] Ask player2 for input 
- [ ] Accept anything other than the spots already picked. 
- [ ] Check if the spot has already been taken. If yes, throw message, spot not empty 
- [ ] If no, then show that spot 
- [ ] Save the spot to reference later  


🔹 Phase 1: Frontend Only (HTML + CSS + Vanilla JS)

Goal: Build a fully playable 2-player game in the browser.

Design the UI: Use HTML/CSS to create a 3×3 board.

Track game state: Represent the board using a JavaScript array.

Handle input: Add event listeners to each cell for user clicks.

Switch players: Alternate between "X" and "O".

Detect win/draw: Write logic to check for a winner or a draw.

    Reset the game: Add a "Reset" button and clear state.

💡 This phase solidifies DOM, conditionals, arrays, loops, functions, and event handling.*/

//initialize board
const board = {
    A1: { value: '' },
    A2: { value: '' },
    A3: { value: '' },
    B1: { value: '' },
    B2: { value: '' },
    B3: { value: '' },
    C1: { value: '' },
    C2: { value: '' },
    C3: { value: '' }
}


//define winning combinations
let com1 = [board.A1.value, board.A2.value, board.A3.value]
let com2 = [board.B1.value, board.B2.value, board.B3.value]
let com3 = [board.C1.value, board.C2.value, board.C3.value]
let com4 = [board.A1.value, board.B1.value, board.C1.value]
let com5 = [board.A2.value, board.B2.value, board.C2.value]
let com6 = [board.A3.value, board.B3.value, board.C3.value]
let com7 = [board.A1.value, board.B2.value, board.C3.value]
let com8 = [board.C1.value, board.B2.value, board.A3.value]

bigcom = [com1, com2, com3, com4, com5, com6, com7, com8]
const buttons = ["cell-0", "cell-1", "cell-2", "cell-3", "cell-4", "cell-5", "cell-6", "cell-7", "cell-8"]
let gameSymbol = 'X'


buttons.forEach(button => {
    let buttonInQuestion = document.getElementById(button)
    buttonInQuestion.addEventListener("click", function () {
        buttonInQuestion.innerText = gameSymbol
        buttonInQuestion.disabled = true
        switch (button) {
            case 'cell-0':
                com1[0] = gameSymbol
                com4[0] = gameSymbol
                com7[0] = gameSymbol
                did_I_Win()
                break;
            case 'cell-1':
                com2[0] = gameSymbol
                com4[1] = gameSymbol
                did_I_Win()
                break;
            case 'cell-2':
                com3[0] = gameSymbol
                com4[2] = gameSymbol
                com8[0] = gameSymbol
                did_I_Win()
                break;
            case 'cell-3':
                com1[1] = gameSymbol
                com5[0] = gameSymbol
                did_I_Win()
                break;
            case 'cell-4':
                com2[1] = gameSymbol
                com5[1] = gameSymbol
                com7[1] = gameSymbol
                com8[1] = gameSymbol
                did_I_Win()
                break;
            case 'cell-5':
                com3[1] = gameSymbol
                com5[2] = gameSymbol
                did_I_Win()
                break;
            case 'cell-6':
                com1[2] = gameSymbol
                com6[0] = gameSymbol
                com8[2] = gameSymbol
                did_I_Win()
                break;
            case 'cell-7':
                com2[2] = gameSymbol
                com6[1] = gameSymbol
                did_I_Win()
                break;
            case 'cell-8':
                com3[2] = gameSymbol
                com6[2] = gameSymbol
                com7[2] = gameSymbol
                did_I_Win()
                break;
            default:
                break;
        }
        if (gameSymbol == 'X')
            gameSymbol = 'O'
        else
            gameSymbol = 'X'
        return gameSymbol

    })
})

let resetButton = document.getElementById("reset")
resetButton.addEventListener("click", function () {
    buttons.forEach(button => {
        let buttonInQuestion = document.getElementById(button)
        buttonInQuestion.innerText = ''
        buttonInQuestion.disabled = false
        gameSymbol = 'X'
    }
    )
    bigcom.forEach(combination => {
        for (let i = 0; i < 3; i++) {
            combination[i] = '';
        }
    })

})

function did_I_Win() {

    if (bigcom.some(com => com.every(value => value === 'X') || bigcom.some(com => com.every(value => value === 'O')))) {
        alert(" Won")
        buttons.forEach(button => {
            let buttonInQuestion3 = document.getElementById(button)
            buttonInQuestion3.disabled = true
            gameSymbol = ''
        }
        )
        return
    }

    /*     if (
            bigcom.some(com => com.every(value => value === 'X')) ||
            bigcom.some(com => com.every(value => value === 'O'))
        ) {
            alert("Won");
            buttons.forEach(button => {
                let buttonInQuestion3 = document.getElementById(button);
                buttonInQuestion3.disabled = true;
                gameSymbol = '';
            });
            return;
        }
     */

    if ((com1.every(value => value != (''))) && (com2.every(value => value != (''))) && (com3.every(value => value != (''))) && (com4.every(value => value != (''))) && (com5.every(value => value != (''))) && (com6.every(value => value != (''))) && (com7.every(value => value != (''))) && (com8.every(value => value != ('')))) {
        alert("Its a draw")
        buttons.forEach(button => {
            let buttonInQuestion3 = document.getElementById(button)
            buttonInQuestion3.disabled = true
            gameSymbol = ''
        }
        )
        return
    }
    console.log("com1 = " + com1)
    console.log("com2 = " + com2)
    console.log("com3 = " + com3)
    console.log("com4 = " + com4)
    console.log("com5 = " + com5)
    console.log("com6 = " + com6)
    console.log("com7 = " + com7)
    console.log("com8 = " + com8)
}