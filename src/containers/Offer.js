import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  /*const [recherche, setRecherche] = useState();*/
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        //console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    console.log("Rentre dans le useEffect");
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>En cour de chargement...</span>
  ) : (
    <div>
      <div className="container2">
        <div className="photo">
          <div className="photo1">
            <img src={data.product_image.secure_url} alt="" />
          </div>
        </div>
        <div className="detail">
          <div className="detail1">
            <p>{data.product_price}</p>
            <p>{data.product_name}</p>

            <p>couleur</p>
            <p>emplacement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
