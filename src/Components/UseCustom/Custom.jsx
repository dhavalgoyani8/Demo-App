/** @format */

import React, { useState, useEffect } from "react";

function Custom(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const resData = await response.json();
      setData(resData);
    };
    getData();
  }, []);
  return [data];
}

export default Custom;
