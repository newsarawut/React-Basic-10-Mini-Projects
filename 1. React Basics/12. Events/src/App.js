// ------------------------ Ex.1 --------------------
// const Button = () => {

//   // const handleClick = () => {
//   //   alert("You Clicked")
//   // }
//   // return <button onClick={handleClick}>Click</button>

//   const handleClick = (a,b) => {
//     alert(a+b)
//   }
//   return <button onClick={() =>handleClick(4, 5)}>Click</button>
// }

// function App() {
//   return (
//     <>
//     <Button />
//     </>
//   );
// }

// export default App;

// ------------------------ Ex.2 --------------------
// const Copy = () => {
//   const copyHandler = () => {
//     alert("Stop Stealing my content")
//   }
//   return <>
//   <p onCopy={copyHandler}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit expedita repellat quae inventore dolores nulla atque voluptatibus explicabo ut velit!
// </p>
//   </>
// }

// function App() {
//   return (
//     <>
//     <Copy />
//     </>
//   );
// }

// export default App;

// ------------------------ Ex.3 --------------------
const Move = () => {
  function moveHandler() {
    alert("Mouse Move Event Fired");
    console.log("Mouse Move Event Fired");
  }

  return (
    <p onMouseOver={moveHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
      voluptatibus libero, eius odit modi doloremque quos magni tempora. Debitis
      laborum exercitationem perferendis. Veritatis fuga, quod quasi accusamus
      eveniet voluptates suscipit.
    </p>
  );
};

const App = () => {
  return <Move />;
};

export default App;