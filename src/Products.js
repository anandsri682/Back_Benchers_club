import { useEffect, useState } from "react";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =========================
     LOCAL STORAGE HELPERS
  ========================= */
  const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  };

  const saveCart = (cartData) => {
    localStorage.setItem("cart", JSON.stringify(cartData));
    setCart(cartData);

    // notify cart page instantly
    window.dispatchEvent(new Event("cartUpdated"));
  };

  /* =========================
     FETCH PRODUCTS
  ========================= */
  useEffect(() => {
    fetchProducts();
    setCart(getCart()); // load cart from storage
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.112:8080/backbenchersclube.com/api/products/loaded"
      );

      if (!response.ok) throw new Error("Failed to fetch products");

      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.error("ERROR 👉", err);
      setError("Unable to load products");
      setLoading(false);
    }
  };

  /* =========================
     CART ACTIONS
  ========================= */
  const addToCart = (product) => {
    const currentCart = getCart();

    if (currentCart[product.id]) {
      currentCart[product.id].qty += 1;
    } else {
      // store FULL product snapshot
      currentCart[product.id] = {
        id: product.id,
        name: product.productName,
        type: product.productType,
        price: product.productPrice,
        image: product.productImage,
        qty: 1,
      };
    }

    saveCart(currentCart);
  };

  const increaseQty = (productId) => {
    const currentCart = getCart();
    currentCart[productId].qty += 1;
    saveCart(currentCart);
  };

  const decreaseQty = (productId) => {
    const currentCart = getCart();

    if (currentCart[productId].qty === 1) {
      delete currentCart[productId];
    } else {
      currentCart[productId].qty -= 1;
    }

    saveCart(currentCart);
  };

  /* =========================
     UI STATES
  ========================= */
  if (loading) return <p className="status-text">Loading products...</p>;
  if (error) return <p className="status-text error">{error}</p>;

  return (
    <div className="products-page">
      <h2 className="products-title">Our Products</h2>

      <div className="products-grid">
        {products.map((product) => {
          const isVisible =
            product.productVisibleStatus?.toLowerCase() === "visible";

          const cartItem = cart[product.id];

          return (
            <div
              className={`product-card ${
                !isVisible ? "not-available" : ""
              }`}
              key={product.id}
            >
              <img src={product.productImage} alt={product.productName} />

              <h4>{product.productName}</h4>
              <p className="product-type">{product.productType}</p>
              <p className="product-price">₹{product.productPrice}</p>

              {isVisible && (
                !cartItem ? (
                  <button
                    className="add-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="qty-controller">
                    <button onClick={() => decreaseQty(product.id)}>-</button>
                    <span>{cartItem.qty}</span>
                    <button onClick={() => increaseQty(product.id)}>+</button>
                  </div>
                )
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;