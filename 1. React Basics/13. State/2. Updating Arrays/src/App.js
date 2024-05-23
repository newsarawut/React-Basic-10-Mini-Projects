import { useState } from "react";

function App() {
  const [friends, setFriends] = useState(["John", "Marry"]);

  const addOne = () => setFriends([...friends, "Martin"]);

  const removeOne = () => setFriends(friends.filter((f) => f !== "Martin"));

  const updateOne = () =>
    setFriends(friends.map((f) => (f === "Marry" ? "Marry Cute" : f)));

  return (
    <>
      {friends.map((f) => (
        <li key={Math.random() * 10}>{f}</li>
      ))}

      <button onClick={addOne}>Add One</button>
      <button onClick={removeOne}>Remove One</button>
      <button onClick={updateOne}>Update One</button>
    </>
  );
}

export default App;
