import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ManageProducts.css";

function ManageProducts() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  /* =========================
     FETCH ALL PRODUCTS
  ========================= */
  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(
        "http://192.168.1.112:8080/backbenchersclube.com/api/products/loaded"
      );

      if (!response.ok) throw new Error("Failed to fetch products");

      const data = await response.json();
      console.log("ADMIN PRODUCTS 👈", data);

      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("ERROR FETCHING PRODUCTS 👉", error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  /* =========================
     CATEGORY FILTER
  ========================= */
  const filteredProducts =
    category === "all"
      ? products
      : products.filter(
          (p) =>
            p.productType?.replace("-", "").toLowerCase() === category
        );

  /* =========================
     TOGGLE VISIBILITY
  ========================= */
  const toggleVisibility = async (productId, updatedStatus) => {
    const payload = {
      productId: productId,
      visibilityData: updatedStatus,
    };

    try {
      const res = await fetch(
        "http://192.168.1.112:8080/backbenchersclube.com/api/product/visible",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        alert("Visibility Updated ✅");
        fetchProducts();
      } else {
        alert("Update Failed ❌");
      }
    } catch (error) {
      console.error("ERROR UPDATING VISIBILITY 👉", error);
    }
  };

  /* =========================
     DELETE PRODUCT
  ========================= */
  const deleteProduct = async (productId) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await fetch(
        `http://192.168.1.112:8080/backbenchersclube.com/api/products/${productId}`,
        { method: "DELETE" }
      );

      fetchProducts();
    } catch (error) {
      console.error("ERROR DELETING PRODUCT 👉", error);
    }
  };

  return (
    <section className="admin-page">
      <h2 className="admin-title">Manage Products</h2>

      {/* TOP BAR */}
      <div className="admin-top">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="veg">Veg</option>
          <option value="nonveg">Non Veg</option>
          <option value="cooldrinks">Cool Drinks</option>
          <option value="icecream">Ice Creams</option>
        </select>

        <button
          className="add-btn"
          onClick={() => navigate("/admin/add-product")}
        >
          + Add Product
        </button>
      </div>

      {/* TABLE */}
      <div className="table-wrapper">
        {loading ? (
          <p className="no-data">Loading products...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Image</th>
                <th>Title</th>
                <th>Type</th>
                <th>Price</th>
                <th>Visibility</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((p, index) => {
                const status = p.productVisibleStatus
                  ?.toString()
                  .replace(/[_\s-]/g, "")
                  .toLowerCase();

                return (
                  <tr key={p.id}>
                    <td>{index + 1}</td>

                    <td>
                      <img
                        src={p.productImage}
                        alt={p.productName}
                        className="product-img"
                      />
                    </td>

                    <td>{p.productName}</td>
                    <td>{p.productType}</td>
                    <td>₹{p.productPrice}</td>

                    {/* VISIBILITY BUTTONS */}
                    <td>
                      <div className="visibility-group">
                        <button
                          className={`status-btn ${
                            status === "visible" ? "green" : "red"
                          }`}
                          onClick={() =>
                            toggleVisibility(p.id, "visible")
                          }
                        >
                          Visible
                        </button>

                        <button
                          className={`status-btn ${
                            status === "notvisible"
                              ? "green"
                              : "red"
                          }`}
                          onClick={() =>
                            toggleVisibility(p.id, "notVisible")
                          }
                        >
                          Not Visible
                        </button>
                      </div>
                    </td>

                    <td className="actions">
                   <button
  className="edit"
  onClick={() =>
    navigate(`/admin/update-product/${p.id}`, {
      state: { product: p },
    })
  }
>
  Edit
</button>

                      <button
                        className="delete"
                        onClick={() => deleteProduct(p.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}

              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan="7" className="no-data">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}

export default ManageProducts;