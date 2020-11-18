import React, { useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import conditions from "../images/conditions.png";
const Login = ({ setUser }) => {
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
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
        <input
          type="password"
          value={password}
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />{" "}
        <div>
          <img src={conditions} alt="" />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};
export default Login;
