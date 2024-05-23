import { useState } from "react";

function App() {
  const [movie, setMovie] = useState({
    title: "Spiderman 2",
    ratings: 8,
  });

  const handleClick = () => {
    // Long way
    // const copyMovie = {
    //   ...movie,
    //   ratings: 9,
    // }
    // setMovie(copyMovie)


    // Short way
    setMovie({
      ...movie,
      ratings: 9,
    });
  };

  return (
    <>
      <h1>{movie.title} </h1>
      <p>Ratings : {movie.ratings}</p>
      <button onClick={handleClick}>Change</button>
    </>
  );
}

export default App;
