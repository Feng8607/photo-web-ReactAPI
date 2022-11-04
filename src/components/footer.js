import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="footer">
      <div className="footercon">
        <div className="footitem">
          <h2>關於我們</h2>
          <nav>
            <ul>
              <li>
                <Link to="/">網站資訊</Link>
              </li>
              <li>
                <Link to="/"> 服務宗旨</Link>
              </li>
              <li>
                <Link to="/">關於作者</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footitem">
          <h2>服務項目</h2>
          <nav>
            <ul>
              <li>
                <Link to="/">圖庫資訊</Link>
              </li>
              <li>
                <Link to="/"> 精選圖片</Link>
              </li>
              <li>
                <Link to="/">圖片收藏</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="copyright">ShengFeng 2022©</div>
    </div>
  );
};

export default footer;
