import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider.jsx";
import "./App.css";
import Login from "./componenets/Login.jsx";
import Profile from "./componenets/Profile.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h2>React course with Nasir</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
