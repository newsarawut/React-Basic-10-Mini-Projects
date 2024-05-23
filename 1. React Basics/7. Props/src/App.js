// const User = (props) => {
//   // console.log(props)
//   return (
//     <section>
//       <img src={props.img} alt={props.name} />
//       <h1>Name: {props.name}</h1>
//       <h3>Hobbies: {props.hobbies}</h3>
//     </section>
//   );
// };

// function App() {
//   return (
//     <>
//       <User
//         img="https://avatars.githubusercontent.com/u/126350332?v=4"
//         name="Sarawut WebDev"
//         age={29}
//         hobbies={["Coding", "Reading", "Trading"]}
//       />
//     </>
//   );
// }

// export default App;

// Example 2
import User from "./User"

function App() {
  return (
    <>
      <User
        img="https://avatars.githubusercontent.com/u/126350332?v=4"
        name="Sarawut WebDev"
        age={29}
        hobbies={["Coding", "Reading", "Trading"]}
        someData={{location:"USA", favorite:"Cake"}}
      />
    </>
  );
}

export default App;

