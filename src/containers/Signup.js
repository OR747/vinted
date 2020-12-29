import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import conditions from "../images/conditions.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = ({ setUser, alert }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [eye, setEye] = useState(true);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { username: username, email: email, password: password }
      );
      console.log(response.data);
      if (response.data.token) {
        setUser(response.data.token);
        // Naviguer vers "/" Home
        history.push("/");
      } else {
        alert("Une erreur est survenue");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h2>S'inscrire</h2>
        <input
          type="text"
          value={username}
          placeholder="Nom d'utilisateur"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <div className="inputWhitIcon2">
          <input
            type="password"
            value={password}
            id="input"
            placeholder="Mot de passe"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div className="inputIcon">
            {eye === true ? (
              <FontAwesomeIcon
                id="eye"
                icon="eye"
                onClick={() => {
                  setEye(false);
                  var x = document.getElementById("input");
                  x.type = "text";
                }}
              />
            ) : (
              <FontAwesomeIcon
                id="eye"
                icon="eye-slash"
                onClick={() => {
                  setEye(true);
                  var x = document.getElementById("input");
                  x.type = "password";
                }}
              />
            )}
          </div>
        </div>
        <div>
          <img src={conditions} alt="" />
        </div>
        <button type="submit">S'enregister </button>
      </form>
    </div>
  );
};
export default Signup;
