import React from "react";
import logo from "../images/Vinted_logo.png";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Header = ({ setUser, token, setFilter }) => {
  // const [search, setSearch] = useState("");

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <div className="input1">
        <SearchBar setFilter={setFilter} />
        <div>
          <i class="fas fa-search"></i>
        </div>
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
            {/* <button>
              <Link to="/signup">S'inscrire </Link>
            </button> */}

            <button>
              <Link to="/login">S'inscrire | Se connecter</Link>
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
