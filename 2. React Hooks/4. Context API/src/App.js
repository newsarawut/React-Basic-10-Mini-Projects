// 1.Import (createContext)
import { createContext } from "react";
import ComponentC from "./ComponentC";

// 2. Creating instance of (createContext)
export const Data = createContext();
export const Data1 = createContext();

function App() {
  const name = "Marry";
  const movie = "Spiderman";

  return (
    // 3. Wrap our component into Provider Component
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={movie}>
          <ComponentC />
        </Data1.Provider>
      </Data.Provider>
    </>
  );
}

export default App;
