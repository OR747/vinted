import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HoUd5CVuhFq1R3g6PIQumaAhwSk8yjbMBHrRzjtMpmYnfaXg4qIgDXX7wxyqrynry2cBi45CbEO76iQjB7wrciT00GSmDNmPJ"
);

const Paiement = () => {
  <Elements stripe={stripePromise}>
    <h5>Résumé de la commande</h5>
    <div className="commande">
      <ul>
        <li>Commande</li>
        <span>€</span>
        <li>Frais de protection de l'acheteur</li>
        <span>€</span>
        <li>Frais de port</li>
        <span>€</span>
      </ul>
    </div>
    <div className="total">Total</div>
    <div className="message">
      <p>
        Il ne vous plus qu'une etape pour vous offrir "nom du produit" vous
        allez payer "" (frais de protection et frais de port inclus){" "}
      </p>
    </div>
    <CheckoutForm />
  </Elements>;
};

export default Paiement;
