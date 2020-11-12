import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState([]);

  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login"
      );
      //console.log(response.data);//
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    console.log("Rentre dans le useEffect");
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cour de chargement...</span>
  ) : (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h2>S'incrire</h2>

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
