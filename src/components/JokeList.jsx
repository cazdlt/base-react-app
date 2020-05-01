import React from "react";

function JokeList({ jokes }) {
  const cards = jokes.map((joke) => {
    return (
      <div key={joke.id} className="card my-2">
        <div className="card-body">{joke.joke}</div>
      </div>
    );
  });

  return cards;
}

export default JokeList;
