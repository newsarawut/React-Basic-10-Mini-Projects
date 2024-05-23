// Example 1
// function App() {
//   return (
//     <h1 style={{color:"red", fontSize:"120px", backgroundColor:"#000"}}>Inline Style</h1>
//   );
// }

// export default App;

// Example 2
function App() {
  const styles = { color: "white", backgroundColor: "teal", padding: "2rem" };

  return (
    <h1 style={styles}>Inline Style</h1>
  );
}

export default App;
