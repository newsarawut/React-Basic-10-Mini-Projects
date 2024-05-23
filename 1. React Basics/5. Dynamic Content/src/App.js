const App = () => {
  const name = "Sarawut Dev";
  const multiply = (a, b) => a * b;
  const specialClass = "simple-class";

  return (
    <section>
      {/* Rendering Variable Value */}
      <h1>{name}</h1>

      {/* Rendering Expression */}
      <p>5 + 3 = {5 + 2}</p>

      {/* Rendering Array */}
      <p>My Friends List: {["John", "Doe", "Ally", "Martin"]}</p>

      {/* Rendering Function Value */}
      <p>5 * 3 = {multiply(5, 3)}</p>

      {/* Rendering Class */}
      <p className={specialClass}>This is special class</p>
    </section>
  );
};

export default App;
