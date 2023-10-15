// import "./styles.css";
import "./index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import Nav from "./Nav";
import Body from "./Body";
import Overlay from "./Overlay";

import data from "./bodyData";

const App = () => {
  const text = data.map((item) => {
    return <Body item={item} />;
  });

  // state for nav bar
  const [isShown, setIsShown] = useState(false);
  // state for subcollections in nav bar
  const [navCol, setNavCol] = useState({
    features: false,
    company: false
  });

  // secondary option
  // const checkNavDisplay = (sub) => {
  //   if (sub === "company") {
  //     setNavCol({ ...navCol, [sub]: !navCol.company });
  //   } else if (sub === "features") {
  //     setNavCol({ ...navCol, [sub]: !navCol.features });
  //   }
  // };

  const checkNavDisplay = (sub) => {
    setNavCol(() => ({
      ...navCol,
      [sub]: !navCol[sub] // Toggle the value
    }));
  };

  const toggleNav = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="App">
      <Nav
        toggle={toggleNav}
        display={isShown}
        features={navCol.features}
        company={navCol.company}
        checkDisplay={checkNavDisplay}
      />
      {text}
      <Overlay display={isShown} toggle={toggleNav} />
    </div>
  );
};

export default App;

