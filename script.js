const boxArray = []; 
const box = document.querySelectorAll('.box')

const gameFactor = (mark,turn) => {
    const getMark =  mark;
    const getTurn =  turn;
    
    const gameBoard = () => {
        return {Board:[
            "","","",
            "","","",
            "","",""]}        
    }
    const render = (() => {        
        const content = () => {for (let i = 0; i < box.length; i++){
            boxArray.push(box[i])
        }
        for (let i = 0; i < Board.Board.length; i++){
            for (let j = 0; j < boxArray.length; j++){
                boxArray[i].textContent = Board.Board[i]  
            }
        }    
    }
    return{content}    
    })(); 

    const Play = (boxes) => {
        for (let i = 0; i < box.length; i++){
            boxes[i].addEventListener('click', () => {
                if (player1.getTurn === true && boxes[i].textContent === ""){
                    Board.Board[i] = player1.getMark;
                    boxes[i].classList.add("x")
                    gameFactor().render.content();
                    player1.getTurn = false;
                    player2.getTurn = true;
                } 
                else if (player2.getTurn === true && boxes[i].textContent === "") {
                    Board.Board[i] = player2.getMark;
                    boxes[i].classList.add("o")
                    gameFactor().render.content()
                    player2.getTurn = false;
                    player1.getTurn = true;
                }
            })
        }  
    }  

    return{getMark, getTurn, gameBoard, render, Play};
}

const Board = gameFactor().gameBoard();
    const player1 = gameFactor("x", true);
    const player2 = gameFactor("o", false); 

gameFactor().render.content()   

gameFactor().Play(boxArray)


  





