import User from "./User";

function App() {
  return (
    <>
      <User
        img="https://avatars.githubusercontent.com/u/126350332?v=4"
        name="Sarawut WebDev"
        age={29}
        hobbies={["Coding", "Reading", "Trading"]}
        someData={{ location: "USA", favorite: "Cake" }}
      />
    </>
  );
}

export default App;
