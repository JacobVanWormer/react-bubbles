import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "./axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() =>
    {axiosWithAuth().get("http://localhost:5000/api/colors")
    .then(res => {
      setColorList(res.data);
    })
    .catch(err => {
      console.log("There was an error", err);
    })}, [props])

  return (
    <>
         <ColorList props={props} colors={colorList} updateColors={setColorList} />
         <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
