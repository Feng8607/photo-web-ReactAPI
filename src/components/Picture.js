import React from "react";
import { Link } from "react-router-dom";

const picture = ({ data }) => {
  return (
    <div>
      <div className="picture">
        <h2>作者:</h2>
        <p>{data.photographer}</p>
        <div className="imageContainer">
          <img src={data.src.large} alt="" />
        </div>
        <p>
          Download Image:
          <Link target="_blank" to={data.src.large}>
            <span className="down">Click Here</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default picture;
