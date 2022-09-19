import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="App">
      <h1>React Hooks Demo</h1>
      <div className="container">
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <p>
          Show Password:{" "}
          <input
            type="checkbox"
            name="show-password"
            onClick={() => setShowPassword((previousValue) => !previousValue)}
          />
        </p>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <code className="">
          Username: {username}
          <br />
          Password: {password.length} characters long
        </code>
      </div>
    </div>
  );
}

export default App;
