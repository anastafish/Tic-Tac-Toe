const boxArray = [];
const box = document.querySelectorAll(".box");

const gameFactor = (name, mark, turn) => {
  const getName = name;
  const getMark = mark;
  const getTurn = turn;

  const gameBoard = { Board: ["", "", "", "", "", "", "", "", ""] };

  const render = (() => {
    const content = () => {
      for (let i = 0; i < box.length; i++) {
        boxArray.push(box[i]);
      }
      for (let i = 0; i < Board.Board.length; i++) {
        for (let j = 0; j < boxArray.length; j++) {
          boxArray[i].textContent = Board.Board[i];
        }
      }
      document.querySelector(".container").style.display = "grid";
      document.querySelector(".main-screen").style.display = "none";
    };
    return { content };
  })();

  const Play = (boxes, player1, player2, Board) => {    
    for (let i = 0; i < box.length; i++) {
      boxes[i].addEventListener("click", () => {
        if (player1.getTurn === true && boxes[i].textContent === "") {
          Board.Board[i] = player1.getMark;
          boxes[i].classList.add("x");  
          gameFactor().render.content();
          player1.getTurn = false;
          player2.getTurn = true;
          if (checkWin(Board.Board)) {
            Board.Board = ["", "", "", "", "", "", "", "", ""];
            document.querySelector(
              ".msg"
            ).textContent = `${player1.getName} Won!`;
            document.querySelector(".winmsg").style.display = "flex";
            document.querySelector(".winmsg").style.background = "red";    

          }
          else if (checkTie(Board.Board)) {
            Board.Board = ["", "", "", "", "", "", "", "", ""];
            document.querySelector(
              ".msg"
            ).textContent = 'Tie!';
            document.querySelector(".winmsg").style.display = "flex";
            document.querySelector(".winmsg").style.background = "yellow";
          }
        } else if (player2.getTurn === true && boxes[i].textContent === "") {
          Board.Board[i] = player2.getMark;
          boxes[i].classList.add("o");
          gameFactor().render.content();
          player2.getTurn = false;
          player1.getTurn = true;
          if (checkWin(Board.Board)) {
            Board.Board = ["", "", "", "", "", "", "", "", ""];
            document.querySelector(
              ".msg"
            ).textContent = `${player2.getName} Won!`;
            document.querySelector(".winmsg").style.display = "flex";
            document.querySelector(".winmsg").style.background = "green";

          }
          else if (checkTie(Board.Board)) {
            Board.Board = ["", "", "", "", "", "", "", "", ""];
            document.querySelector(
              ".msg"
            ).textContent = 'Tie!';
            document.querySelector(".winmsg").style.display = "flex";
            document.querySelector(".winmsg").style.background = "yellow";
          }
        }
      });
    }
    document.querySelector(".reset").addEventListener("click", () => {
      Board.Board = ["", "", "", "", "", "", "", "", ""];
      gameFactor().render.content();
      document.querySelector(".winmsg").style.display = "none";
      for (let i = 0; i < box.length; i++) {
        box[i].classList.remove("o", "x");
      }
    });

    document.querySelector('.restart').addEventListener('click', () => {
        document.querySelector(".container").style.display = "none";
        document.querySelector(".main-screen").style.display = "flex";
        document.querySelector(".winmsg").style.display = "none";
        for (let i = 0; i < box.length; i++) {
            box[i].classList.remove("o", "x");
          }
          Board.Board = ["", "", "", "", "", "", "", "", ""];
    })
  };

  const checkWin = (markArray) => {
    for (let i = 0; i < 9; i += 3) {
      if ((markArray[i], markArray[i + 1], markArray[i + 2] != "")) {
        if (
          markArray[i] === markArray[i + 1] &&
          markArray[i + 1] === markArray[i + 2]
        ) {
          return true;
        }
      }
    }
    for (let i = 0; i < 4; i += 1) {
      if ((markArray[i], markArray[i + 3], markArray[i + 6] != "")) {
        if (
          markArray[i] === markArray[i + 3] &&
          markArray[i + 3] === markArray[i + 6]
        ) {
          return true;
        }
      }
    }

    if ((markArray[0], markArray[4], markArray[8] != "")) {
      if (markArray[0] === markArray[4] && markArray[4] === markArray[8]) {
        return true;
      }
    }

    if ((markArray[2], markArray[4], markArray[6] != "")) {
      if (markArray[2] === markArray[4] && markArray[4] === markArray[6]) {
        return true;
      }
    }
  };

  const checkTie = (markArray) => {
    for ( let i = 0, l = markArray.length; i < l; i++ )
  {
    if ( "" === markArray[i])
    {
      return false
    }
  }
  return true;
  }

  return { getName, getMark, getTurn, gameBoard, render, Play };
};

document.querySelector("#start-btn").addEventListener("click", () => {
    playerOne = document.querySelector("#playerone");
    playerTwo = document.querySelector("#playertwo");
    let player1 = gameFactor(playerOne.value, "X", true);
    let player2 = gameFactor(playerTwo.value, "O", false);   
    gameFactor().render.content();
    gameFactor().Play(boxArray, player1, player2, Board);
    playerOne.value = "";
    playerTwo.value = "";
    
});
const Board = gameFactor().gameBoard;
