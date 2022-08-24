import CreationCard from "./CreationCard";
import drawing from "../images/drawing.svg";
import eye from "../images/eye.svg";
import font_preview from "../images/font_preview.svg";
import style from "../styles/Creation.module.css";

const Creation = () => {
  return (
    <div className={style.cards}>
      <CreationCard
        title="Readability"
        text="Frutiger was created for readability at distance or as small text size. "
        img={eye}
      />
      <CreationCard
        title="1976"
        text="Comissioned in 1968, finished in 1975 and finally published in 1976."
        img={drawing}
      />
      <CreationCard
        title="Humanist Sans-Serif"
        text="Frutigeris a humanist sans-serif font."
        img={font_preview}
      />
    </div>
  );
};

export default Creation;
