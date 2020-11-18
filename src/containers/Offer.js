import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const Offer = () => {
  /*const [recherche, setRecherche] = useState();*/
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const history = useHistory();
  const price = data.product_price;
  const protectionFees = (price / 10).toFixed(2);
  const shippingFees = (protectionFees * 2).toFixed(2);
  const total = Number(price) + Number(protectionFees) + Number(shippingFees);

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
            <div className="price">
              <p>{data.product_price}€</p>
            </div>
            <div className="detail3">
              <div className="detail31">
                <p>MARQUE</p>
                <p>TAILLE</p>
                <p>ÉTAT</p>
                <p>COULEUR</p>
                <p>EMPLACEMENT</p>
              </div>
              <div className="detail32">
                {data.product_details.map((item, index) => {
                  return (
                    <div key={index}>
                      <p>{item.TAILLE}</p>
                      <p>{item.MARQUE}</p>
                      <p>{item.ÉTAT}</p>
                      <p>{item.COULEUR}</p>
                      <p>{item.EMPLACEMENT}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="name">{data.product_name}</div>
            <div className="description">{data.product_description}</div>
            <div className="owner">
              <div className="avatar">
                {data.owner.account.avatar && (
                  <img src={data.owner.account.avatar.url} alt="" />
                )}
              </div>
              <div className="username">{data.owner.account.username}</div>
            </div>
            <button
              onClick={() => {
                history.push({
                  pathname: "/payment",
                  state: {
                    productName: data.product_name,
                    totalPrice: total,
                    protectionFees: protectionFees,
                    shippingFees: shippingFees,
                    price: data.product_price,
                  },
                });
              }}
            >
              Acheter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
