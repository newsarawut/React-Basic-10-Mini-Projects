import { useState } from "react";
import "./style.css";

const Validate = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const handleValidate = (e) => {
    e.preventDefault();

    if (username.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("Username must be 8 letters long.");
      setUserColor("red");
    }

    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Email should have @gmail");
      setEmailColor("red");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password should be 8 letters long.");
      setPasswordColor("red");
    }

    if (password != "" && password == confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Password didn't matched.");
      setConfirmPasswordColor("red");
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-image"></div>

        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: userColor }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="error">{errorUserName}</p>

          <input
            type="text"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>

          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errorPassword}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{errorConfirmPassword}</p>

          <button className="submit-btn" onClick={handleValidate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Validate;
