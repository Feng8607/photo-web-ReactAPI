import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import axios from "axios";
const Homepage = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");
  const auth = "563492ad6f917000010000011770bc193a4e41ccade521dbdab1c500";
  const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;

  const search = async (url) => {
    setPage(2);
    const dataFetch = await axios.get(url, {
      headers: {
        Authorization: auth,
      },
    });
    setData(dataFetch.data.photos);
    setCurrentSearch(input);
  };

  //Load more picture
  const morepicture = async () => {
    let newURL;
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    setPage(page + 1);
    const dataFetch = await axios.get(newURL, {
      headers: {
        Authorization: auth,
      },
    });
    let parsedData = dataFetch.data;
    setData(data.concat(parsedData.photos));
  };

  useEffect(() => {
    search(intialURL);
  }, []);

  useEffect(() => {
    if (currentSearch === "") {
      search(intialURL);
    } else {
      search(searchURL);
    }
  }, [currentSearch]);

  return (
    <div className="homePage">
      <Search
        search={() => {
          setCurrentSearch(input);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((Item) => {
            return <Picture key={Item.id} data={Item} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morepicture}>點擊更多</button>
      </div>
    </div>
  );
};

export default Homepage;
