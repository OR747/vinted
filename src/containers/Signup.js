import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import conditions from "../images/conditions.png";
const Signup = ({ setUser, alert }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

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
        <input
          type="password"
          value={password}
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div>
          <img src={conditions} alt="" />
        </div>
        <button type="submit">S'enregister </button>
      </form>
    </div>
  );
};
export default Signup;
