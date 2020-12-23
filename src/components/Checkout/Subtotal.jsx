import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

const basket = [];
const value = 0;

const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={() => (
          <>
            <p>
              Subtotal ( {basket.length} items ):
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"₹"}
      />
      <button className="checkout__button">Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
