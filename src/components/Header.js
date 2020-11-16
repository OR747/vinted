import React, { useState } from "react";
import logo from "../images/Vinted_logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = ({ setUser, token }) => {
  const [search, setSearch] = useState("");

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
            value={search}
            placeholder="Recherche des articles"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <div>
            <i class="fas fa-search"></i>
          </div>
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
          <button>
            <Link to="/publish">Vends tes articles</Link>
          </button>
        </span>
      </div>
    </div>
  );
};
export default Header;
