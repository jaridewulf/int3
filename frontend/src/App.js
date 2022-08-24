import "./App.css";
import { createContext, useState } from "react";

// Components
import Nav from "./components/Nav";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Weights from "./components/Weights";
import Article from "./components/Article";
import Variables from "./components/Variables";
import Creation from "./components/Creation";
import Creator from "./components/Creator";

// Images / prep for database
import swissFlag from "./images/swiss_flag.svg";
import imgAdrian from "./images/imgAdrian.jpg";

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
          title={"Data"}
          key={1}
          value={1}
          sides={[
            <Article title="creation" number={1.1} content={<Creation />} />,
            <Article
              title="creator"
              number={1.2}
              content={
                <Creator
                  name="Adrian Frutiger"
                  job="Digital Typographer"
                  company="Linotype Foundry"
                  img={imgAdrian}
                  nationality={swissFlag}
                  birthyear={1928}
                  dayOfDeath={2015}
                />
              }
            />,
          ]}
        />
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
