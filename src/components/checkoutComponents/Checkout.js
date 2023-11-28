import PaypalCheckoutButton from "./PaypalCheckoutButton";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const CLIENT_ID = process.env.REACT_APP_PAYPAL_CLIENT_ID;

const Checkout = () => {
  const product = {
    description: "Design+Code React Hooks Course",
    price: 49.99,
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <PayPalScriptProvider
        options={{
          "client-id": CLIENT_ID,
        }}
      >
        <div className="paypal-button-container">
          <PaypalCheckoutButton product={product} />
        </div>
      </PayPalScriptProvider>
    </div>
  );
};

export default Checkout;
