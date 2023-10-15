import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Test = () => {
  const [swData, setSWData] = useState({});
  useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => setSWData(data));
  }, []);

  return <div className="test-wrap">{swData}</div>;
};

export default Test;
