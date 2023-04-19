import React from 'react';

export default function MovieCard(props) {
  return (
    <div className="movie-card">
      {props.title}
      <br />
      {props.date}
      <br />
      {props.description}
    </div>
  );
}
