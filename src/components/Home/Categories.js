import React from "react";
import { Link } from "react-router-dom";
import Items from "../Home/Items";

const Categories = ({ data }) => {
  console.log(data);
  return (
    <Link to={`/offer/${data._id}`}>
      <div className="categories">
        <div className="cat2">
          <img src={data.product_images} alt="" />
        </div>
        <div className="cat1">
          <p>{data.product_name}</p>
          <p>{data.product_price}</p>
          <p>{data._id}</p>
        </div>
        <div className="cat3">
          {data.product_details.map((item, index) => {
            return <Items data={item} key={item.id} />;
          })}
        </div>
      </div>
    </Link>
  );
};
export default Categories;
