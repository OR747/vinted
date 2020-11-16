import React, { useState } from "react";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";

const Publish = ({ token }) => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescrition] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const formData = new FormData();
  formData.append("title", title);
  formData.append("picture", file);
  formData.append("descrition", description);
  formData.append("brand", brand);
  formData.append("size", size);
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
        { headers: { authorization: "Bearer" + token } }
      );
      console.log(response.data);
      if (response.data.token) {
        history.push("/offer");
      } else {
        alert("Une erreur est survenue");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return token ? (
    <form onSubmit={handleSubmit}>
      <h3>Vends ton article</h3>
      <div className="picture">
        <input
          type="file"
          onChange={(event) => {
            setFile(event.target.files);
          }}
        />
      </div>
      <div className="title">
        <input
          type="text"
          value={title}
          placeholder="Titre"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <textarea
          name="desription"
          id="descrition"
          cols="30"
          rows="10"
          placeholder="Décris ton article"
          onChange={(event) => {
            setDescrition(event.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <input
          type="text"
          value={brand}
          placeholder="Marque"
          onChange={(event) => {
            setBrand(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={size}
          placeholder="Taille"
          onChange={(event) => {
            setSize(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={color}
          placeholder="Couleur"
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={condition}
          placeholder="État"
          onChange={(event) => {
            setCondition(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={city}
          placeholder="Lieu"
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={price}
          placeholder="Prix"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
      </div>

      <button type="submit">Envoyer</button>
    </form>
  ) : (
    <Redirect to={{ pathname: "/loggin", state: "publish" }} />
  );
};
export default Publish;
