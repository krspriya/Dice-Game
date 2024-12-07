import { useState, useEffect } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import "./App.css"; // Include your styles here

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <header>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </div>
  );
}

export default App;
