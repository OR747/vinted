import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe(
  "pk_test_51HoUd5CVuhFq1R3g6PIQumaAhwSk8yjbMBHrRzjtMpmYnfaXg4qIgDXX7wxyqrynry2cBi45CbEO76iQjB7wrciT00GSmDNmPJ"
);

const Paiement = () => {
  const location = useLocation();
  const {
    price,
    totalPrice,
    protectionFees,
    shippingFees,
    productName,
  } = location.state;
  return (
    <div className="Ticket">
      <div className="ticket">
        <h5>Résumé de la commande</h5>
        <div className="commande">
          <div className="commande1">
            <div>Commande</div>
            <span>{price}€</span>
          </div>
          <div className="commande2">
            <div>Frais de protection de l'acheteur</div>
            <span>{protectionFees}€</span>
          </div>
          <div className="commande3">
            <div> Frais de port</div>
            <span>{shippingFees}€</span>{" "}
          </div>
        </div>
        <div className="total">
          <div>Total</div>
          <span>{totalPrice.toFixed(2)}€</span>{" "}
        </div>
        <div className="message">
          <p>
            Il ne vous plus qu'une etape pour vous offrir{" "}
            <span>{productName}</span> vous allez payer{" "}
            <span>{totalPrice}</span>€ (frais de protection et frais de port
            inclus){" "}
          </p>
        </div>
        <div className="carte">
          <Elements stripe={stripePromise}>
            <CheckoutForm productName={productName} totalPrice={totalPrice} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Paiement;
