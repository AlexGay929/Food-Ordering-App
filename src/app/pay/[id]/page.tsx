"use client";

import CheckoutForm from "@/components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import axios from "axios";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const PayPage = ({ params }: { params: { id: string } }) => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = params;

  console.log(id)
  
  useEffect(() => {
    console.log("orderId:", id); // Check if orderId is logged correctly
    const makeRequest = async () => {
      try {
        const res = await fetch(
          `https://github.com/AlexGay929/Food-Ordering-App/src/app/api/create-intent/${id}`,
          {
            method: "POST",
          }
        );
        console.log("API response:", res);
        const data = await res.json();
        console.log("API response data:", data);
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, [id]);

  const options:StripeElementsOptions={
    clientSecret,
    appearance:{
      theme:"stripe"
    }
  }

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};
 

export const dynamic = 'force-dynamic';
export default PayPage;

