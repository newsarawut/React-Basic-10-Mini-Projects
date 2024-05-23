import { useState } from "react";

const App = () => {

  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <section>
      <h1>{counter}</h1>
      <button className="p" onClick={increment}>+</button>
      <button className="m" onClick={decrement}>-</button>
    </section>
  );
};

export default App;