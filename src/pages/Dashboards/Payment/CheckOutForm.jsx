import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      // confirm payment
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "anonymous",
              name: user?.displayName || "anonymous",
            },
          },
        });

      if (confirmError) {
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "warning",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        if (paymentIntent.status === "succeeded") {
          const payment = {
            email: user?.email,
            price: totalPrice,
            date: new Date(),
            transactionId: paymentIntent.id,
            cartIds: cart.map((item) => item._id),
            menuItemIds: cart.map((item) => item.menuId),
            status: "pending",
          };

          // save the payment in the database
          const res = await axiosSecure.post("/payments", payment);
          if (
            res.data?.deleteResult?.deletedCount > 0 &&
            res.data?.paymentResult?.insertedId
          ) {
            Swal.fire({
              title: "Payment done!",
              text: `Thanks for purchasing with ${paymentMethod.card.brand}. Your trx id: ${paymentIntent.id}`,
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
            navigate("/dashboard/payment-history");
          }
        }
      }
    }
  };

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="sm:w-1/2 border p-6 bg-slate-100 mx-2 sm:mx-auto rounded-lg"
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn mt-6"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
    </>
  );
};

export default CheckOutForm;
