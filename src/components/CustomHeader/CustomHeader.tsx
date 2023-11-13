import { Header } from "antd/es/layout/layout";

import "./CustomHeader.css";

interface HeaderProps {
  score: number;
}

const CustomHeader: React.FC<HeaderProps> = ({ score }) => (
  <Header className="header">
    <h1>Joulun Muistipeli</h1>

    <p className="score">Score: {score}</p>
  </Header>
);

export default CustomHeader;
