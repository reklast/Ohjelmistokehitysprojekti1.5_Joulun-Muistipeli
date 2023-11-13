import { useState } from "react";
import "./App.css";
import CustomFooter from "./components/CustomFooter/CustomFooter";
import CustomHeader from "./components/CustomHeader/CustomHeader";
import Game from "./components/Game/Game";

function App() {
  const [gameScore, setGameScore] = useState<number>(0);
  return (
    <div className="mainWrap">
      <CustomHeader score={gameScore} />
      <Game score={gameScore} setScore={setGameScore} />
      <CustomFooter />
    </div>
  );
}

export default App;
