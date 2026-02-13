import { useEffect, useState } from "react";
import "./Cart.css"; // optional styling

function Cart() {
  const [cart, setCart] = useState({});

  /* =========================
     LOAD CART
  ========================= */
  const loadCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
    setCart(storedCart);
  };

  useEffect(() => {
    loadCart();

    // listen updates from Products page
    window.addEventListener("cartUpdated", loadCart);
    return () => window.removeEventListener("cartUpdated", loadCart);
  }, []);

  /* =========================
     SAVE CART
  ========================= */
  const saveCart = (cartData) => {
    localStorage.setItem("cart", JSON.stringify(cartData));
    setCart(cartData);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  /* =========================
     CART ACTIONS
  ========================= */
  const increaseQty = (id) => {
    const updated = { ...cart };
    updated[id].qty += 1;
    saveCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = { ...cart };

    if (updated[id].qty === 1) {
      delete updated[id];
    } else {
      updated[id].qty -= 1;
    }

    saveCart(updated);
  };

  const removeItem = (id) => {
    const updated = { ...cart };
    delete updated[id];
    saveCart(updated);
  };

  /* =========================
     CALCULATIONS
  ========================= */
  const cartItems = Object.values(cart);

  const grandTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  /* =========================
     EMPTY CART
  ========================= */
  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart is Empty 🛒</h2>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      <div className="cart-list">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>

              <div className="qty-box">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <p className="item-total">
                Total: ₹{item.price * item.qty}
              </p>

              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Grand Total: ₹{grandTotal}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;