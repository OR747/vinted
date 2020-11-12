import React from "react";
import logo from "../images/Vinted_logo.png";
import { Link } from "react-router-dom";

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
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
          <Link to="/login">
            <button>Se connecter</button>
          </Link>
        </div>
        <div className="button2">
          <button>Vends tes articles</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
