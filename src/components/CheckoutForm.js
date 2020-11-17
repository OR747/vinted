import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
  const [buy, setBuy] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: "l'id de l'acheteur",
      });

      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          stripeToken: stripeToken,
        }
      );

      if (response.data.status === "succeeded") {
        setBuy(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {buy ? (
        <p>Paiment OK !</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit">Pay</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
