import React from "react";
import React, { useState, useEffect } from 'react';

export default function MovieDetail(props) {
  console.log(props);
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/films/').then((rawData) => rawData.json())
      .then((response) => {
        setState(response.results);
      });
  }, []);

  return <div>Default Data || { state }</div>
}