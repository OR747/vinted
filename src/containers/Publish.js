import React, { useState } from "react";
import axios from "axios";

const Publish = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescrition] = useState("");
  const [MARQUE, setMARQUE] = useState("");
  const [TAILLE, setTAILLE] = useState("");
  const [COULEUR, setCOULEUR] = useState("");
  const [ÉTAT, setÉTAT] = useState("");
  const [EMPLACEMENT, setEMPLACEMENT] = useState("");
  const [price, setPrice] = useState("");

  const formData = new FormData();
  formData.append("title", title);
  formData.append("picture", file);
  formData.append("descrition", description);
  formData.append("MARQUE", MARQUE);
  formData.append("TAILLE", TAILLE);
  formData.append("COULEUR", COULEUR);
  formData.append("ÉTAT", ÉTAT);
  formData.append("EMPLACEMENT", EMPLACEMENT);
  formData.append("price", price);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        " https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
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
        <input
          type="text"
          value={description}
          placeholder="Décris ton article"
          onChange={(event) => {
            setDescrition(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={MARQUE}
          placeholder="Marque"
          onChange={(event) => {
            setMARQUE(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={TAILLE}
          placeholder="Taille"
          onChange={(event) => {
            setTAILLE(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={COULEUR}
          placeholder="Couleur"
          onChange={(event) => {
            setCOULEUR(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={ÉTAT}
          placeholder="État"
          onChange={(event) => {
            setÉTAT(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={EMPLACEMENT}
          placeholder="Lieu"
          onChange={(event) => {
            setEMPLACEMENT(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="sring"
          value={price}
          placeholder="Prix"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
};
export default Publish;
