import React from "react";
import Items from "../Home/Items";

const Categories = ({ data }) => {
  return (
    <div className="categories">
      <div className="cat2">
        <img src={data.product_image} alt="" />
      </div>
      <div className="cat1">
        <p>{data.product_price}</p>
      </div>
      <div className="cat3">
        {data.product_details.map((item, index) => {
          return <Items data={item} key={index} />;
        })}
      </div>
    </div>
  );
};
export default Categories;
