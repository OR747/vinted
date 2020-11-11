import React from "react";
import logo from "../images/Vinted_logo.png";
const Header = ({ recherche, setRecherche }) => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div className="input">
        <input
          type="text"
          value={recherche}
          placeholder="Recherche des articles"
          onChange={(event) => {
            setRecherche(event.target.value);
          }}
        />
      </div>
      <div className="button">
        <div className="button1">
          <button>S'inscrire</button>
          <button>Se connecter</button>
        </div>
        <div className="button2">
          <button>Vends tes articles</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
