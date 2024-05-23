import { useState } from "react";

function App() {
  const [username, setUsername] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`You typed: ${username}`)
    setUsername("")
  }

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  return (
    <>
    <h1>Form Demo</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={handleChange} />
      <button>Submit</button>
    </form>
    </>
  );
}

export default App;
