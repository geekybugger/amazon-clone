import React from "react";
import "./Product.css";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "../../StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToBasket = () => {
    //Dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small> &#8377; </small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="product" />
      <Rating
        name="half-rating-read"
        defaultValue={rating}
        precision={0.5}
        readOnly
      />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
