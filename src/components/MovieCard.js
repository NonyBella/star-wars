import React from 'react';
import { Link } from "react-router-dom";
export default function MovieCard(props) {
  return (
    
    <div className='movieContainer'>
      <div className="movie-card">
        {props.title}
        <br />
        {props.date}
        <br />
        {props.description}
        <br />
        <Link to={`/movie/${props.id}`} { ...props }>Read More</Link>
      </div>
    </div>
  
  );
}
