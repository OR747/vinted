import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ productName, totalPrice }) => {
  const [isPaid, setIsPaid] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  console.log(totalPrice);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: "l'id de l'acheteur",
      });

      console.log(stripeResponse);

      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          amount: totalPrice,
          title: productName,
        }
      );
      console.log(response.data);

      if (response.data.status === "succeeded") {
        setIsPaid(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return isPaid ? (
    <p>Paiment effectué !</p>
  ) : (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Pay</button>
    </form>
  );
};

export default CheckoutForm;
