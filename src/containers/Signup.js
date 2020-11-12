import React, { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  /*const [recherche, setRecherche] = useState();*/
  const [data, setData] = useState([]);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          { username: username, email: email, password: password }
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    console.log("Rentre dans le useEffect");
    fetchData();
  }, []);

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h2>S'incrire</h2>
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
        <button>S'inscire</button>
      </form>
    </div>
  );
};
export default Signup;
