import { useState } from "react";

import "./App.css";

import CustomFooter from "./components/CustomFooter/CustomFooter";
import CustomHeader from "./components/CustomHeader/CustomHeader";
import Game from "./components/Game/Game";
import Login from "./components/Login/Login";
import AudioButton from "./components/AudioButton/AudioButton";

function App() {
  const [gameScore, setGameScore] = useState<number>(0);
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>('');
  const [bestScore, setBestScore] = useState<string>('0');

  const setName = (value: string) => {
    setUserName(value);
  }

  const setLogin = () => {
    if (userName !== '') {
      setShowLogin(false);
    }
  };

  const getBestScore = async () => {
    try {
      const response = await fetch('https://express-server-memory-game-740e1bbada2c.herokuapp.com/getPlayersScore', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: userName })
      });

      response.json().then((value) => {
        setBestScore(value);
        return value;
      })
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="mainWrap">
      <CustomHeader score={gameScore} bestScore={bestScore} />
      <div className="gameWrap">
        {showLogin ? (
          <Login
            getName={setName}
            onLogin={setLogin}
            playerName={userName}
          />
        )
          :
          (
            <Game score={gameScore} setScore={setGameScore} bestScore={bestScore} getBestScore={getBestScore} setBestScore={setBestScore} userName={userName} />
          )}
        <AudioButton />
      </div>
      <CustomFooter />
    </div>
  );
}

export default App;
