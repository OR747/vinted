import React from "react";
import Categories from "../Home/Categories";

const Offers = ({ data }) => {
  return (
    <div className="offre">
      {data.offers.map((categories, index) => {
        return <Categories key={index} data={categories} />;
      })}
    </div>
  );
};
export default Offers;
