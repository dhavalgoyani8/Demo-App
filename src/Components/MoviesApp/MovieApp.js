/** @format */

import React from "react";
import Movie from "./Movie";
import "./MovieApp.css";
import movies from "./Movies.json";

function MovieApp() {
  return (
    <div className="movieApp">
      <div className="header">
        <h1>Employee Data List</h1>
      </div>
      <div className="main">
        {movies.map((element) => {
          return (
            <Movie
              key={element.id}
              name={ element.firstName+" "+element.maidenName+" "+element.lastName }
              age={element.age}
              img={element.image}
              email={element.email}
              phone={element.phone}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MovieApp;
