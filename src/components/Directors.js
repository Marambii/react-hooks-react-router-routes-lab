import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
       {directors.map(directors=> (
        <div key={directors.id}>
          <h2>{directors.name}</h2>
          <ul>
            {directors.movies.map(movie =>(
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </div>
       ))}

    </div>)
  ;
}

export default Directors;
