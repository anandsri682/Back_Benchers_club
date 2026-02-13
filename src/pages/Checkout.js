import { useState } from "react";
import { getCart } from "../utils/cart";
import "./Checkout.css";

function Checkout() {
  const userId = localStorage.getItem("userId") || "guest";

  // 🔥 READ USER-SPECIFIC CART
  const cart = getCart(userId);

  const [address, setAddress] = useState("");

  // 🔥 CALCULATE TOTAL FROM CART
  const total = Object.entries(cart).reduce(
    (sum, [, item]) =>
      sum + item.productPrice * item.qty,
    0
  );

  if (Object.keys(cart).length === 0) {
    return (
      <div className="checkout-page">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      {/* ADDRESS */}
      <h3>Delivery Address</h3>
      <textarea
        placeholder="Enter full delivery address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      {/* BILL */}
      <h3>Bill Summary</h3>
      <p>Items Total: ₹{total}</p>
      <p>Delivery Charges: ₹30</p>
      <h3>Grand Total: ₹{total + 30}</h3>

      <button
        onClick={() => {
          if (!address) {
            alert("Please enter address");
            return;
          }

          const order = {
            userId,
            address,
            items: cart,
            total: total + 30,
          };

          console.log("ORDER 👉", order);

          alert("Order placed successfully ✅");

          // 🔥 CLEAR ONLY THIS USER CART
          localStorage.removeItem(`cart_${userId}`);
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
