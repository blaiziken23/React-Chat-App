import { useEffect, useState } from "react";
import Login from "./components/login/Login";
import Messenger from "./components/messenger/Messenger";
import NavBar from "./components/navbar/NavBar";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username"));

  return (
    <main className="h-screen">
      {/* <NavBar /> */}
      <div className="h-full flex justify-center items-center">
        {!username ? (
          <Login setUsername={setUsername} />
        ) : (
          <Messenger username={username} />
        )}
      </div>
    </main>
  );
}

export default App;
