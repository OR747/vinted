import React from "react";

const Items = ({ data }) => {
  return (
    <div className="items">
      <p>{data.marque}</p>
      <p>{data.taille}</p>
    </div>
  );
};
export default Items;
