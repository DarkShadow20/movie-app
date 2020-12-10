import React, { useState } from "react";
import "./styles.css";

const movieDictionary = {
  scifi: [
    {
      name: "Inception",
      rating: "8.8/10",
      detail:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Interstellar",
      rating: "8.6/10",
      detail:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Predestionation",
      rating: "7.5/10",
      detail:
        "For his final assignment, a top temporal agent must pursue the one criminal that has eluded him throughout time. The chase turns into a unique, surprising and mind-bending exploration of love, fate, identity and time travel taboos.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTAzODc3NjU1NzNeQTJeQWpwZ15BbWU4MDk5NTQ4NTMx._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    }
  ],
  comedy: [
    {
      name: "Get Hard",
      rating: "6.0/10",
      detail:
        "When millionaire James King is jailed for fraud and bound for San Quentin, he turns to Darnell Lewis to prep him to go behind bars.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTc3OTc1NjM0M15BMl5BanBnXkFtZTgwNjAyMzE1MzE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Dirty Grandpa",
      rating: "5.9/10",
      detail:
        "Right before his wedding, an uptight guy is tricked into driving his grandfather, a lecherous former Army Lieutenant Colonel, to Florida for Spring Break.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzk0NzkyNDk2M15BMl5BanBnXkFtZTgwNDczOTU3NzE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Night School",
      rating: "5.6/10",
      detail:
        "A group of high school dropouts are forced to attend night school in hope that they'll pass the GED exam to finish high school.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWU5NjgxZWItY2E2ZC00NDM5LTg4MzQtMjBhNjE5Njc1NzdhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    }
  ],
  horror: [
    {
      name: "The Exorcist",
      rating: "8.0/10",
      detail:
        "When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.",
      image:
        "https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTU3ZjcwNTBjN2I1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "The Conjuring",
      rating: "7.5/10",
      detail:
        "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Us",
      rating: "6.9/10",
      detail:
        "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    }
  ]
};

export default function App() {
  const [meaning, setMeaning] = useState("scifi");

  function genreClickHandler(genre) {
    setMeaning(genre);
  }
  return (
    <div className="App">
      <h1>MovieDoor Vaults</h1>
      <p>Checkout the movies according to genre.</p>
      <div className="genreButton">
        {Object.keys(movieDictionary).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <ul>
        {movieDictionary[meaning].map(function (movie) {
          return (
            <div className="output-div" key={movie.name}>
              <section className="movieoutput">
                <div className="left-img">
                  <img className="img" src={movie.image} alt="City" />
                </div>
                <div className="right-text">
                  <div className="text-movie">Name: {movie.name}</div>
                  <div className="medium-text">Rating: {movie.rating}</div>
                  <div className="desc-text">
                    <strong>Description: </strong>
                    {movie.detail}
                  </div>
                </div>
              </section>
            </div>
          );
        })}
        {/* {selectedCountry} */}
      </ul>
    </div>
  );
}
