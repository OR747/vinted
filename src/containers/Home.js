import React from "react";
import { Link } from "react-router-dom";
import photo from "../images/vinted1.jpeg";
const Home = ({ data }) => {
  return (
    <div>
      <div className="container1">
        <img src={photo} alt="" />
        <div className="bloc2">
          <div className="bloc3">
            <h1>Prêts à faire du tri dans vos placards ?</h1>
          </div>
          <div className="bloc4">
            <button>Commencer à vendre</button>
          </div>
        </div>
      </div>
      <div className="contenaire2"></div>

      <Link to="/offer">OFFER</Link>
    </div>
  );
};
export default Home;
