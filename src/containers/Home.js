import React, { useState, useEffect } from "react";

import Offers from "../components/Home/Offers";
import photo from "../images/Vinted2.png";
// import Tear from "../images/tear.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  /*const [recherche, setRecherche] = useState();*/
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        " https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      //console.log(response.data);
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
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <div className="container1">
        <div className="image">
          <img src={photo} alt="" />
        </div>
        <div className="bloc2">
          <div className="bloc3">
            <h1>Prêts à faire du tri dans vos placards ?</h1>
          </div>
          <div className="bloc4">
            <Link to="/publish">
              <button>Commencer à vendre</button>
            </Link>
          </div>
        </div>
        {/* <div>
          <img src={Tear} alt="" />
        </div> */}
      </div>
      <div className="bloc5">
        <Offers data={data} />
      </div>
    </div>
  );
};
export default Home;
