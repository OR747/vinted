import React, { useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import conditions from "../images/conditions.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = ({ setUser }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [eye, setEye] = useState(true);
  const history = useHistory();
  const location = useLocation();

  //revenir à la page d'acceuil aprés le login
  let fromPublish;
  if (location.state) {
    fromPublish = true;
  } else {
    fromPublish = false;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email: email, password: password }
      );
      //console.log(response.data);//

      if (response.data.token) {
        setUser(response.data.token);
        history.push(fromPublish ? "/publish" : "/");
      } else {
        alert("Une erreure est survenue");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h2>Se connecter</h2>
        <input
          type="email"
          value={email}
          placeholder="Adresse email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <div className="inputWhitIcon">
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
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};
export default Login;
