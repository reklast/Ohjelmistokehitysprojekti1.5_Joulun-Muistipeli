import { Footer } from "antd/es/layout/layout";

import "./CustomFooter.css";

function CustomFooter() {
  return (
    <Footer className="footer">
      <div className="footerContent">
        <div className="authorsWrap">
          <h1>Made By</h1>
          <p className="authors">
            <a href="https://github.com/reklast">Nikita</a>
            &
            <a href="https://github.com/marionum">Maria</a>
          </p>
        </div>
      </div>

    </Footer>
  );
}

export default CustomFooter;
