import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState([]);

  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/login",
          { email: email, password: password }
        );
        //console.log(response.data);//
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
        />
        <button>Se connecter</button>
      </form>
    </div>
  );
};
export default Login;
