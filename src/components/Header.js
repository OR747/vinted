import React, { useState } from "react";
import logo from "../images/Vinted_logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = ({ setUser, token }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        " https://lereacteur-vinted-api.herokuapp.com/offers"
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <div className="input1">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            placeholder="Recherche des articles"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </form>
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
        <span className="button3">
          <button>Vends tes articles</button>
        </span>
      </div>
    </div>
  );
};
export default Header;
