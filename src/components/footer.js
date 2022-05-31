import React from "react";

const footer = () => {
  return (
    <div className="footer">
      <div className="footercon">
        <div className="footitem">
          <h2>關於我們</h2>
          <nav>
            <ul>
              <li>
                <a href="">網站資訊</a>
              </li>
              <li>
                <a href=""> 服務宗旨</a>
              </li>
              <li>
                <a href="">關於作者</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footitem">
          <h2>服務項目</h2>
          <nav>
            <ul>
              <li>
                <a href="">圖庫資訊</a>
              </li>
              <li>
                <a href=""> 精選圖片</a>
              </li>
              <li>
                <a href="">圖片收藏</a>
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
