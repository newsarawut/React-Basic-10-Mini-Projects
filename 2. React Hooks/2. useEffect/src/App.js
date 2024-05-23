import { useEffect, useState } from "react";

// function App() {
//   const [value, setValue] = useState(0)

//   // 1. Render for the (first time)
//   // 2. Anytime we do (side effect)
//   // 3. Deependecy List
//   useEffect(() => {
//     console.log("Hello")
//     document.title = `increment (${value})`
//   },[])

//   return (<>
//   <h1>{value}</h1>
//   <button onClick={() => setValue(value +1)}>Click me</button>
//   </>
//   );
// }

// export default App;

// The cleanup can prevent memory leaks and remove unwanted things. Some use-cases for this are:

// Clean up subscriptions
// Clean up modals
// Remove event listeners
// Clear timeouts
// const App = () => {
//   const [size, setSize] = useState(window.innerWidth);
//   console.log(size);

//   const checkSize = () => setSize(window.innerWidth);

//   useEffect(() => {
//     window.addEventListener("resize", checkSize);
//     return () => {
//       // Before we add render our component again
//       // this cleanup function will cleanup the component first.
//       console.log("cleanup");
//       window.removeEventListener("resize", checkSize);
//     };
//   });

//   return (
//     <>
//       <h2>window</h2>
//       <h2>{size}px</h2>
//     </>
//   );
// };

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);

  return (
    <>
      <ul>
        {data.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
