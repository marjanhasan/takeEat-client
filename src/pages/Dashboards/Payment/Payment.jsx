import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle title={"payment"} subtitle={"payment here"} />

      <div className="text-center  w-full">
        <h1 className="text-4xl font-bold">Payment related help!</h1>
        <ul className="py-6 text-lg font-semibold list-disc list-inside">
          <li>CARD: 4242 4242 4242 4242</li>
          <li>DATE: 02/25 [any future month and year]</li>
          <li>CVC: 123 [any three digits]</li>
          <li>ZIP: 12345 [any five digits]</li>
        </ul>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
