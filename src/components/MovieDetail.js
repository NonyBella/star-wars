import React from "react";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetail(props) {
  let { id } = useParams();
  const [data, setState] = useState();

  useEffect(() => {
    fetch('https://swapi.dev/api/films/' + id).then((rawData) => rawData.json())
      .then((response) => {
        setState(response);
      });
  }, []);

  return (
    <div>
      {
        data ? 
        <div>
          <h3> {data.title} Details </h3>
          <div> Title: { data.title } </div> 
          <div> Episode Id: { data.episode_id } </div> 
          <div> Description: { data.opening_crawl } </div> 
          <div> Director: { data.director } </div> 
          <div> Producer: { data.producer } </div> 
          <div> Release Date: { data.release_date } </div> 
          <div> species: { data.species } </div> 
          <div> Created: { data.created } </div> 
          <div> Edited: { data.edited } </div> 
          <div> Url: { data.url } </div>  
        </div>
        :
        <img src="/loader.svg" alt="Loading..."/>
      }  
    </div>
  )
}