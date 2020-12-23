import React from "react";
import { Product } from "../Components";
import "./Home.css";

const products = [
  {
    id: 1,
    title: "OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)",
    image: "https://m.media-amazon.com/images/I/71m05O2uNdL._AC_UY218_.jpg",
    price: 42999,
    rating: 4.5,
  },
  {
    id: 2,
    title: "New Apple iPhone 12 (128GB) - (Product) RED",
    image: "https://m.media-amazon.com/images/I/71E5zB1qbIL._AC_UY218_.jpg",
    price: 81900,
    rating: 4,
  },
  {
    id: 3,
    title: "ASIAN Men's Wonder-13 Mesh Sports Running Shoes",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61T4moof7XL._UL1024_.jpg",
    price: 1575,
    rating: 3.5,
  },
  {
    id: 4,
    title:
      "Fossil Gen 5 (46mm, black) Garrett Stainless steel Touchscreen Men's Smartwatch with Speaker, Heart Rate, GPS, Music storage and Smartphone Notifications - FTW4038",
    image: "https://m.media-amazon.com/images/I/81pIWumz64L._AC_UL320_.jpg",
    price: 22995,
    rating: 4.5,
  },
  {
    id: 5,
    title:
      "Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa Voice Control - Black",
    image: "https://m.media-amazon.com/images/I/81+jNVOUsJL._AC_UY218_.jpg",
    price: 24959,
    rating: 4.5,
  },
  {
    id: 6,
    title:
      "TCL 138.8 cm (55 inches) 4K Ultra HD Certified Android Smart QLED TV 55C815 (Metallic Black) (2020 Model) | with Built in Woofer",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61DN2-JFu2L._SL1379_.jpg",
    price: 101999,
    rating: 4,
  },
];

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Pay/Dec/DesktopHero_reward_1500x600_N2Pay._CB414450956_.jpg"
          alt="carousel"
          className="home__image"
        />
        <div className="home__row">
          <Product
            id={products[0].id}
            title={products[0].title}
            image={products[0].image}
            price={products[0].price}
            rating={products[0].rating}
          />
          <Product
            id={products[1].id}
            title={products[1].title}
            image={products[1].image}
            price={products[1].price}
            rating={products[1].rating}
          />
        </div>
        <div className="home__row">
          <Product
            id={products[2].id}
            title={products[2].title}
            image={products[2].image}
            price={products[2].price}
            rating={products[2].rating}
          />
          <Product
            id={products[3].id}
            title={products[3].title}
            image={products[3].image}
            price={products[3].price}
            rating={products[3].rating}
          />
          <Product
            id={products[4].id}
            title={products[4].title}
            image={products[4].image}
            price={products[4].price}
            rating={products[4].rating}
          />
        </div>
        <div className="home__row">
          <Product
            id={products[5].id}
            title={products[5].title}
            image={products[5].image}
            price={products[5].price}
            rating={products[5].rating}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
