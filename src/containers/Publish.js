import React, { useState } from "react";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";

const Publish = ({ token }) => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const formData = new FormData();
  formData.append("title", title);
  formData.append("picture", file);
  formData.append("description", description);
  formData.append("brand", selectedBrand);
  formData.append("size", selectedSize);
  formData.append("color", color);
  formData.append("condition", condition);
  formData.append("city", city);
  formData.append("price", price);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        " https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        { headers: { authorization: "Bearer " + token } }
      );
      console.log(response.data);
      if (response.data._id) {
        history.push(`/offer/${response.data._id}`);
      } else {
        alert("Une erreur est survenue");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return token ? (
    <form onSubmit={handleSubmit}>
      <div className="publish">
        <h3>Vends ton article</h3>
        <div className="picture">
          <input
            type="file"
            id="file"
            onChange={(event) => {
              //console.log(event.target.files);//
              setFile(event.target.files[0]);
            }}
          />
        </div>
        <div className="title">
          <div className="titre">
            <h4>Titre</h4>
            <input
              type="text"
              id="title"
              value={title}
              placeholder="Titre"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="description">
            <h4>Description</h4>
            <textarea
              name="desription"
              id="descrition"
              cols="30"
              rows="10"
              placeholder="Décris ton article"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div>
          <div className="detailprod">
            <div className="text-input">
              <h4>Marque</h4>
              <input
                type="text"
                value={selectedBrand}
                id="brand"
                placeholder="Marque"
                onChange={(event) => {
                  setSelectedBrand(event.target.value);
                }}
              />
            </div>

            <div>
              <div className="text-input">
                <h4>Taille</h4>
                <input
                  type="text"
                  value={selectedSize}
                  id="size"
                  placeholder="Taille"
                  onChange={(event) => {
                    setSelectedSize(event.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <div className="text-input">
                <h4>Couleur</h4>
                <input
                  type="text"
                  value={color}
                  id="color"
                  placeholder="Couleur"
                  onChange={(event) => {
                    setColor(event.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <div className="text-input">
                <h4>État</h4>
                <input
                  type="text"
                  value={condition}
                  id="condition"
                  placeholder="État"
                  onChange={(event) => {
                    setCondition(event.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <div className="text-input">
                <h4>Ville</h4>
                <input
                  type="text"
                  value={city}
                  id="city"
                  placeholder="Lieu"
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="text-price">
          <h4>Prix</h4>
          <input
            type="number"
            value={price}
            id="price"
            placeholder="Prix"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>
        <div className="achete">
          <button type="submit">Ajouter</button>
        </div>
      </div>
    </form>
  ) : (
    <Redirect to={{ pathname: "/login", state: { fromPublish: true } }} />
  );
};
export default Publish;
