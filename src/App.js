import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartingScreen from "./Screens/StartingScreen";
import GameScreen from "./Screens/GameScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartingScreen />} />
        <Route path="game" element={<GameScreen />} />
      </Routes>
    </div>
  );
}

export default App;
