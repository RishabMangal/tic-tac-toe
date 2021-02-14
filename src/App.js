import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Confetti from "react-confetti";
import Box from "./Box";
function App() {
  const [boxes, setBoxes] = useState(
    Array(9).fill({ char: null, isChecked: false, points: 0 })
  );
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isGameOver, setIsGameOver] = useState(null);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (boxes) => {
    for (let i = 0; i < lines.length; i++) {
      const [x, y, z] = lines[i];
      if (
        boxes[x].char &&
        boxes[x].char === boxes[y].char &&
        boxes[x].char === boxes[z].char
      ) {
        return boxes[x].char;
      }
    }
    return null;
  };

  const makeMove = (i) => {
    let newBoxes = [...boxes];
    let obj = { char: isX ? "X" : "O", isChecked: true };
    newBoxes[i] = { ...obj };
    setIsX(!isX);
    setBoxes(newBoxes);
  };

  const computerMove = (userI) => {
    var compI = null;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i][0] === userI) {
        if (boxes[compI]?.isChecked === false) {
          compI = lines[i][1];
          console.log(
            `found ${lines[i][0]} & ${userI} at : 0 and setting cI: ${compI} ${lines[i]}`
          );
        }
        makeMove(compI);
        break;
      } else if (lines[i][1] === userI) {
        compI = lines[i][2];
        console.log(
          `found ${lines[i][1]} & ${userI} at : 1 and setting cI: ${compI}`
        );
        break;
      } else if (lines[i][2] === userI) {
        compI = lines[i + 1][2];
        console.log(
          `found ${lines[i][2]} & ${userI} at : 1 and setting cI: ${compI}`
        );
        break;
      } else {
        console.log("Not found");
      }
    }
    console.log("CompI: ", compI);
  };

  const handleClick = (i) => {
    if (!winner) {
      let newBoxes = [...boxes];
      let obj = { ...newBoxes[i], char: isX ? "X" : "O", isChecked: true };
      newBoxes[i] = { ...obj };
      isX ? setXScore(xScore + obj.points) : setOScore(oScore + obj.points);
      setIsX(!isX);
      setBoxes(newBoxes);
      let isWinner = checkWinner(newBoxes);
      checkGameOver(newBoxes);
      setWinner(isWinner);
    }
    // computerMove(i);
  };

  const checkGameOver = (boxes) => {
    let isGameOver = true;
    boxes.forEach((box) => {
      if (box.isChecked === false) {
        isGameOver = false;
      }
    });
    setIsGameOver(isGameOver);
  };

  const resetBoxes = () => {
    let tempBoxes = [];
    boxes.forEach((box, i) => {
      let tempBox = {};
      if (i === 4) {
        tempBox = { char: null, isChecked: false, points: 200 };
      } else if (i % 2 === 0) {
        tempBox = { char: null, isChecked: false, points: 50 };
      } else {
        tempBox = { char: null, isChecked: false, points: 100 };
      }
      tempBoxes.push(tempBox);
    });
    setBoxes(tempBoxes);
  };

  useEffect(() => {
    const initPoints = () => {
      let tempBoxes = [];
      boxes.forEach((box, i) => {
        let tempBox = {};
        if (i === 4) {
          tempBox = { ...box, points: 200 };
        } else if (i % 2 === 0) {
          tempBox = { ...box, points: 50 };
        } else {
          tempBox = { ...box, points: 100 };
        }
        tempBoxes.push(tempBox);
      });
      setBoxes(tempBoxes);
    };
    initPoints();
  }, []);

  const resetHandler = () => {
    resetBoxes();
    setIsX(true);
    setXScore(0);
    setOScore(0);
    setWinner(null);
    setIsGameOver(false);
  };

  return (
    <div className="App">
      {winner && (
        <Confetti gravity={0.4} numberOfPieces={500} wind={0.05}></Confetti>
      )}
      {/* {winner && (
        <Confetti
          drawShape={(ctx) => {
            ctx.beginPath();
            for (let i = 0; i < 22; i++) {
              const angle = 0.35 * i;
              const x = (0.2 + 1.5 * angle) * Math.cos(angle);
              const y = (0.2 + 1.5 * angle) * Math.sin(angle);
              ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.closePath();
          }}
          gravity={0.4}
          numberOfPieces={500}
        />
      )} */}
      <h1 className="display-4 pb-2 px-4 pt-4 ">
        <span style={{ color: "red" }}>Tic </span>
        <span className="text-primary">Tac </span>
        <span style={{ color: "yellow" }}>Toe </span>
        ..!
      </h1>
      <div className="panel pb-4 px-4 pt-2">
        {winner ? (
          <div className="text-success">{winner + " Won"}</div>
        ) : isGameOver ? (
          <div className="text-danger">Game Over</div>
        ) : (
          <div className="text-light">
            {isX ? (
              <span className="text-primary mr-1 w-10">X's </span>
            ) : (
              <span className="text-warning mr-1 w-10">O's </span>
            )}
            Turn
          </div>
        )}
        <button onClick={resetHandler} className="ml-4 btn btn-primary">
          Reset / Play Again
        </button>
      </div>
      <div className="score-card">
        <div className="x-score text-light">
          X : <span className="text-light">{xScore}</span>
        </div>
        <div className="o-score">
          O : <span className="text-dark">{oScore}</span>
        </div>
      </div>
      <div className="grid">
        {boxes.map((box, i) => (
          <Box
            key={i}
            index={i}
            onClick={() => (box.isChecked ? null : handleClick(i))}
            value={box}
          ></Box>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
