import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Spiderman",
      ratings: 5,
    },
    {
      id: 2,
      title: "Batman",
      ratings: 6,
    },
  ]);

  const handleClick = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...movies, title: "John Wick" } : m))
    );
  };

  return (
    <>
      {movies.map((movie) => (
        <li key={Math.random() * 6}>{movie.title}</li>
      ))}

      <button onClick={handleClick}>Change Movie</button>
    </>
  );
}

export default App;
