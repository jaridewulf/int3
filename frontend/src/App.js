import Nav from "./components/Nav";
import "./App.css";
import { createContext, useState } from "react";

export const styleContext = createContext();

function App() {
  const [style] = useState({
    color: "#ffff00",
    font: "helvetica",
  });

  return (
    <styleContext.Provider value={style}>
      <main className="App">
        <header className="App-header">
          <span className="App-title">Frutiger</span>
          <Nav />
        </header>
      </main>
    </styleContext.Provider>
  );
}

export default App;
