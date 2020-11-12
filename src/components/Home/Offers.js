import React from "react";
import Categories from "../Home/Categories";

const Offers = ({ data }) => {
  return (
    <div className="offre">
      {data.offers.map((categorie, index) => {
        return <Categories key={index} data={categorie} />;
      })}
    </div>
  );
};
export default Offers;
