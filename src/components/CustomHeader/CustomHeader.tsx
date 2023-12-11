import { Header } from "antd/es/layout/layout";

import "./CustomHeader.css";

interface HeaderProps {
  score: number;
  bestScore: string;
}

const CustomHeader: React.FC<HeaderProps> = ({ score, bestScore }) => (
  <Header className="header">
    <h1> Jouluinen muistipeli</h1>
    <div className="scoreWrap">
      <p className="score">Current Score: {score}</p>
      <p className="bestScore">Best Score: {bestScore}</p>
    </div>
  </Header>
);

export default CustomHeader;
