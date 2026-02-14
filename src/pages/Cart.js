import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();
 
  const [cartItems, setCartItems] = useState([]);
 const [coupon, setCoupon] = useState("");
 const [discount, setDiscount] = useState(0);
 const [isCouponApplied, setIsCouponApplied] = useState(false);
 const [showPopup, setShowPopup] = useState(false);
const [popupMessage, setPopupMessage] = useState("");



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
const applyCoupon = () => {
    if (coupon.toUpperCase() === "ANAND") {
      setPopupMessage("Coupon Applied Successfully 🎉");
    setShowPopup(true);
      setIsCouponApplied(true);
      

    } else {
      setPopupMessage("Invalid Coupon ❌");
      setCoupon("");
      setShowPopup(true);
      setDiscount(0);
    }
  };
  const removeCoupon = () => {
  setIsCouponApplied(false);
  setCoupon("");
  setDiscount(0);
};



// document.getElementById("coupon_btn").addEventListener("click", applyCoupon);
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
    useEffect(() => {
  if (coupon.toUpperCase() === "ANAND") {
    setDiscount(totalPrice * 0.10); // 10%
  } else {
    setDiscount(0);
  }
}, [totalPrice, coupon]);

const finalPrice = totalPrice - discount;
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
        {showPopup && (
  <div className="popup-overlay">
    <div className="popup-box">
      <p>{popupMessage}</p>
      <button onClick={() => setShowPopup(false)}>OK</button>
    </div>
  </div>
)}
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
                  <p>₹{item.price} /-</p>

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
            <div className="coupan-code">
              <input
        type="text"
        placeholder="Enter Coupon"
        value={coupon}
        readOnly={isCouponApplied}
        onChange={(e) => setCoupon(e.target.value)}
      />

     {!isCouponApplied ? (
  <button onClick={applyCoupon} >Apply</button>
) : (
  <button onClick={removeCoupon} style={{background:"red"}}>Remove</button>
)}


            </div>
          <div className="cart-summary">
            <h3>Total: ₹{totalPrice}</h3>
            <p>Discount: ₹{discount}</p>
            <h2>Payable: ₹{finalPrice}</h2>

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
