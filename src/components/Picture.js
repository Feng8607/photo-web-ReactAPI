import React from "react";

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
          Download Image:{" "}
          <a target="_blank" href={data.src.large}>
            <span className="down">Click Here</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default picture;
