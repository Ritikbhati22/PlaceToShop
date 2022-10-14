import React from "react";
import "./Product.css";
import { useStateValue } from "./Provider";

function Profuct({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue();
  const addtocart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div>
      <div className="Product">
        <div className="Info">
          <p>{title}</p>
          <p className="price">
            <small>₹</small>
            <b>{price}</b>
          </p>
          <div className="ratings">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} className="image" />
        <button className="button" onClick={addtocart}>
          AddToCart
        </button>
      </div>
    </div>
  );
}

export default Profuct;
