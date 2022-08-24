import Nav from "./components/Nav";
import Header from "./components/Header";
import "./App.css";
import { createContext, useState } from "react";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Weights from "./components/Weights";
import Article from "./components/Article";
import Variables from "./components/Variables";

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
        <Section
          title={"Variables"}
          key={2}
          value={2}
          sides={[
            <Article title="weights" number={2.1} content={<Weights />} />,
            <Article title="variables" number={2.2} content={<Variables />} />,
          ]}
        />
        <Footer />
      </main>
    </themeContext.Provider>
  );
}

export default App;
