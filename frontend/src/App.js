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
import Iterations from "./components/Iterations";
import UsesCases from "./components/UseCases";
import BrandIdentity from "./components/BrandIdentity";

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
        <Section
          title={"Iterations"}
          key={3}
          value={3}
          sides={[
            <Article
              title="families"
              number={3.1}
              content={<Iterations number={3.1} />}
            />,
          ]}
        />
        <Section
          last={true}
          title={"Use cases"}
          key={4}
          value={4}
          sides={[
            <Article
              title="Main use"
              number={4.1}
              content={<UsesCases number={4.1} />}
            />,
            <Article
              title="Brand Identity"
              number={4.2}
              content={<BrandIdentity number={4.2} />}
            />,
          ]}
        />
        <Footer />
      </main>
    </themeContext.Provider>
  );
}

export default App;
