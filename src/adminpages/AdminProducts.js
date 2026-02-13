import { useEffect, useState } from "react";
import "./AdminProducts.css";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =========================
     LOAD PRODUCTS FROM BACKEND
     ========================= */
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.112:8080/backbenchersclube.com/api/products/loaded"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      console.log("ADMIN PRODUCTS 👈", data);

      // 🔥 SHOW ONLY VISIBLE PRODUCTS
      const visibleProducts = data.filter(
        (p) =>
          p.productVisibleStatus &&
          p.productVisibleStatus.toLowerCase() === "visible"
      );

      setProducts(visibleProducts);
      setLoading(false);
    } catch (err) {
      console.error("ERROR 👉", err);
      setError("Unable to load products");
      setLoading(false);
    }
  };

  /* =========================
     CATEGORY FILTER
     ========================= */
  const filteredProducts =
    category === "all"
      ? products
      : products.filter(
          (p) =>
            p.productType
              ?.replace("-", "")
              .toLowerCase() === category
        );

  /* =========================
     UI STATES
     ========================= */
  if (loading) {
    return <p className="no-data">Loading products...</p>;
  }

  if (error) {
    return <p className="no-data">{error}</p>;
  }

  return (
    <div className="admin-products">
      {/* HEADER */}
      <div className="products-header">
        <h2>Manage Products</h2>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Items</option>
          <option value="veg">Veg</option>
          <option value="nonveg">Non-Veg</option>
          <option value="cooldrinks">Cool Drinks</option>
          <option value="icecream">Ice Creams</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="table-wrapper">
        {filteredProducts.length === 0 ? (
          <p className="no-data">No products found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Product</th>
                <th>Type</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((item, index) => (
                <tr key={item.productName}>
                  <td>{index + 1}</td>
                  <td>{item.productName}</td>
                  <td className="type">{item.productType}</td>
                  <td>₹{item.productPrice}</td>
                  <td>
                    <img
                      src={item.productImage}
                      alt={item.productName}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminProducts;
