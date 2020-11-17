import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HoUd5CVuhFq1R3g6PIQumaAhwSk8yjbMBHrRzjtMpmYnfaXg4qIgDXX7wxyqrynry2cBi45CbEO76iQjB7wrciT00GSmDNmPJ"
);

const Paiement = () => {
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>;
};

export default Paiement;
