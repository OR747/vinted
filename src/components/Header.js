import React from "react";
import logo from "../images/Vinted_logo.png";
import { Link } from "react-router-dom";

const Header = ({ recherche, setRecherche, setUser, token }) => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

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
        {token ? (
          <div className="button1">
            <button
              onClick={() => {
                setUser(null);
              }}
            >
              Se déconnecter
            </button>
          </div>
        ) : (
          <div className="button2">
            <button>
              <Link to="/signup">S'inscrire </Link>
            </button>

            <button>
              <Link to="/login">Se connecter</Link>
            </button>
          </div>
        )}
        <div className="button3">
          <button>Vends tes articles</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
