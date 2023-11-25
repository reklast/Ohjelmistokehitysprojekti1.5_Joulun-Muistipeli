import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
// Data
import { images, ICard } from "../../data/images";
import "./Game.css";

interface GameProps {
  score: number;
  setScore: (score: number) => void;
}

type Match = Array<string | null | number>;

const Game: React.FC<GameProps> = ({ setScore, score }) => {
  const [game, setGame] = useState<ICard[]>([]);
  const [showField, setShowField] = useState<boolean>(true);
  const [cardOne, setCardOne] = useState<Match>([]);
  const [cardTwo, setCardTwo] = useState<Match>([]);
  const [pairCount, setPairCount] = useState<number>(0);

  // Start first game
  useEffect(() => {
    const newGame: ICard[] = images.sort(() => Math.random() - 0.5);
    setGame(newGame);
    setTimeout(() => setShowField(false), 2000);
  }, []);

  // Start new game
  useEffect(() => {
    if (pairCount === 10) {
      alert("Onnittelut ja Hyvää Joulua!");
      setTimeout(() => {
        const newGame: ICard[] = images.sort(() => Math.random() - 0.5);
        newGame.forEach((item) => {
          item.match = false;
        });
        setGame(newGame);
        setShowField(true);
        setPairCount(0);
      }, 500);
      setTimeout(() => setShowField(false), 3000);
    }
  }, [pairCount]);

  // Compare cards
  useEffect(() => {
    if (cardTwo.length !== 0 && cardOne[0] === cardTwo[0]) {
      setTimeout(() => {
        // Increment score with each match
        setScore(score + 1);

        setPairCount(pairCount + 1);
        setCardOne([]);
        setCardTwo([]);

        game.forEach((item) => {
          if (item.name === cardOne[0]) {
            item.match = true;
          }
        });
      }, 400);
    }
  }, [cardOne, cardTwo, setScore, score, pairCount, game]);

  const onCoverClick = (id: number) => {
    const cardName: string | null = game[id].name;

    if (cardOne.length === 0) {
      setCardOne([cardName, id]);
      setGame((prevGame) =>
        prevGame.map((item, index) =>
          index === id ? { ...item, flipped: true } : item
        )
      );
    }

    // Detect the same card click
    if (cardOne[1] === id) {
      setGame((prevGame) =>
        prevGame.map((item) => ({ ...item, flipped: false }))
      );
      setCardOne([]);
      setCardTwo([]);
      return false;
    }

    // Condition to add the second card for comparison
    if (cardOne.length !== 0) {
      setCardTwo([cardName, id]);
      setGame((prevGame) =>
        prevGame.map((item, index) =>
          index === id ? { ...item, flipped: true } : item
        )
      );

      // False if not a match
      setTimeout(() => {
        setGame((prevGame) =>
          prevGame.map((item) => ({ ...item, flipped: false }))
        );
        setCardOne([]);
        setCardTwo([]);
        return false;
      }, 600);
    }

    return true;
  };

  return (
    <div className="gameField">
      {game.map((item, index) => (
        <div key={index}>
          <Card
            id={index}
            animation={showField}
            name={item.name}
            image={item.pic}
            flipped={item.flipped}
            matched={item.match}
            onCoverClick={() => onCoverClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Game;
