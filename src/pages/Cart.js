import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  /* =============================
     LOAD CART FROM LOCAL STORAGE
  ============================== */
  const loadCart = () => {
    const storedCart =
      JSON.parse(localStorage.getItem("cart")) || {};

    // 🔥 Convert OBJECT → ARRAY
    setCartItems(Object.values(storedCart));
  };

  useEffect(() => {
    loadCart();

    // Listen for cart updates from other pages
    window.addEventListener("cartUpdated", loadCart);

    return () => {
      window.removeEventListener("cartUpdated", loadCart);
    };
  }, []);

  /* =============================
     UPDATE CART (SAVE BACK)
  ============================== */
  const updateCartStorage = (updatedArray) => {
    // Convert array back to object
    const updatedObject = {};
    updatedArray.forEach((item) => {
      updatedObject[item.id] = item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedObject));
    setCartItems(updatedArray);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  /* =============================
     INCREASE QTY
  ============================== */
  const increaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? { ...item, qty: item.qty + 1 }
        : item
    );

    updateCartStorage(updated);
  };

  /* =============================
     DECREASE QTY
  ============================== */
  const decreaseQty = (id) => {
    const updated = cartItems
      .map((item) =>
        item.id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0);

    updateCartStorage(updated);
  };

  /* =============================
     TOGGLE SELECT
  ============================== */
  const toggleSelect = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? { ...item, selected: !item.selected }
        : item
    );

    updateCartStorage(updated);
  };

  /* =============================
     TOTAL (ONLY SELECTED)
  ============================== */
  const totalPrice = cartItems
    .filter((item) => item.selected)
    .reduce(
      (total, item) => total + item.price * item.qty,
      0
    );

  /* =============================
     CHECKOUT
  ============================== */
  const handleCheckout = () => {
    const selectedItems = cartItems.filter(
      (item) => item.selected
    );

    if (selectedItems.length === 0) {
      alert("Please select at least one item");
      return;
    }

    navigate("/checkout", { state: selectedItems });
  };

  return (
    <section className="cart-page">
      <h2 className="cart-title">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Cart is empty</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-card" key={item.id}>
                <input
                  type="checkbox"
                  checked={item.selected || false}
                  onChange={() => toggleSelect(item.id)}
                  className="cart-checkbox"
                />

                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>

                  <div className="qty-controller">
                    <button
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{totalPrice}</h3>

            <button
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
