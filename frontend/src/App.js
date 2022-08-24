import Nav from "./components/Nav";
import Header from "./components/Header";
import "./App.css";
import { createContext, useState } from "react";
import Section from "./components/Section";

export const themeContext = createContext();

function App() {
  const [theme] = useState({
    color: "#FFF",
    bgColor: "#000",
    accentColor: "#ffff00",
    font: "Helvetica",
  });

  return (
    <themeContext.Provider value={theme}>
      <main
        className="App"
        style={{
          fontFamily: theme.font,
          color: theme.color,
          backgroundColor: theme.bgColor,
        }}
      >
        <Nav />
        <Header />
        <Section />
      </main>
    </themeContext.Provider>
  );
}

export default App;
