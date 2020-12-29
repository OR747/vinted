import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <div className="detail32">
              <p style={{ fontSize: 24 }}>{data.product_price}€</p>
              <hr />

              {data.product_details.map((item, index) => {
                const keys = Object.keys(item);
                return (
                  <div key={index} className="offer-description">
                    <p>{keys[0]}</p>
                    <p>{item[keys[0]]}</p>
                  </div>
                );
              })}
              <hr />
              {/* <div className="name">{data.product_name}</div> */}
              <p>{data.product_name}</p>
              {/* <div numberOfLines={3}>{data.product_description}</div> */}
              <p numberOfLines={3}>{data.product_description}</p>
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
              <div className="owner">
                {data.owner.account.avatar && (
                  <img src={data.owner.account.avatar.url} alt="" />
                )}

                <div className="username">
                  {data.owner.account.username}
                  <div className="rating">
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
